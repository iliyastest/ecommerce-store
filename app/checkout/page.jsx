"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

function Checkout() {
  const searchParams = useSearchParams();
  let amount = Number(searchParams.get("amount"));

  // Ensure the amount is valid
  if (isNaN(amount) || amount <= 0) {
    console.error("Invalid amount specified");
    return <div>Invalid amount specified</div>;
  }

  // Convert to the smallest currency unit (cents for USD) and round to avoid floating-point errors
  const roundedAmount = Math.round(amount * 100);

  const options = {
    mode: "payment",
    currency: "usd",
    amount: roundedAmount,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
}

export default Checkout;
