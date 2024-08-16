"use client";
import { HiBadgeCheck } from "react-icons/hi";
import { TbAlertOctagon } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartApi from "../../../_utils/CartApi";
import { useContext } from "react";
import { CartContext } from "../../../_context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductInfo({ product }) {
  const { setCart } = useContext(CartContext);
  const { user } = useUser();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
      cartApi
        .addToCart(data)
        .then((res) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
          toast.success("Item added to cart!");
        })
        .catch((error) => {
          console.log("error", error);
          toast.error("Failed to add item to cart.");
        });
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-[20px] font-bold">{product?.attributes?.title}</h2>
        <h2 className="text-[15px] text-gray-400">
          {product?.attributes?.category}
        </h2>
        <h2 className="text-[15px] mt-2">
          {product?.attributes?.description[0]?.children[0].text}
        </h2>
        <h2 className="text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
          {product?.attributes?.instantDelivery ? (
            <HiBadgeCheck className="size-5 text-green-500" />
          ) : (
            <TbAlertOctagon className="size-5 text-red-500" />
          )}{" "}
          Eligible For Instant Delivery
        </h2>
        <h2 className="text-[24px] text-primary font-semibold mt-2">
          $ {product?.attributes?.price}
        </h2>

        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 py-2 px-3 mt-1 text-white rounded-lg bg-primary hover:scale-105 duration-300"
        >
          <FaCartShopping className=" text-xl" />
          Add To Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductInfo;
