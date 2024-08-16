"use client";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { CartContext } from "../../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import OrderApi from "../../_utils/OrderApi";
import CartApi from "../../_utils/CartApi";

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter(); // Initialize useRouter
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    try {
      const res = await fetch("/api/create-intent", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });
      const clientSecret = await res.json();

      const result = await stripe.confirmPayment({
        clientSecret,
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payment-confirm",
        },
        redirect: "if_required", // Allows staying on the same page if no redirect is needed
      });

      if (result.error) {
        handleError(result.error);
      } else if (result.paymentIntent?.status === "succeeded") {
        await createOrder();
        await sendEmail();

        router.prefetch("/payment-confirm");
        router.replace("/payment-confirm");
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async () => {
    const productIds = cart.map((el) => el?.product?.id);

    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        amount,
        products: productIds,
      },
    };

    const res = await OrderApi.createOrder(data);
    if (res) {
      for (const el of cart) {
        await CartApi.deletCartItem(el?.id);
      }
      setCart([]);
    }
  };

  const sendEmail = async () => {
    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        amount,
        email: user.primaryEmailAddress.emailAddress,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto px-6 sm:max-w-[600px] mt-20 min-h-screen">
        <PaymentElement />
        {errormessage && (
          <p className="text-red-600 text-base">{errormessage}</p>
        )}
        <button
          className="w-full p-2 mt-4 text-white rounded-md bg-primary hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 mb-24"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
