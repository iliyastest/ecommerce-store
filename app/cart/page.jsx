"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "../_context/CartContext";
import CartApi from "../_utils/CartApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const getTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += Number(item?.product?.attributes?.price);
    });
    return totalAmount.toFixed(2);
  };

  const handleDelete = (id) => {
    CartApi.deletCartItem(id).then((res) => {
      if (res) {
        setCart((oldCart) =>
          oldCart.filter((item) => item.id !== res?.data?.data.id)
        );
        toast.error("Item removed from cart!");
      }
    });
    setShowModal(false); // Close the modal after deletion
  };

  const handleCheckout = () => {
    const totalAmount = getTotalAmount();
    if (totalAmount == 0) {
      toast.error("Your cart is empty. Add items to proceed to checkout.");
      return;
    }
    router.prefetch(`/checkout?amount=${totalAmount}`);

    router.push(`/checkout?amount=${totalAmount}`);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mb-32">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li className="flex items-center gap-4" key={item.id}>
                  <img
                    src={
                      item?.product?.attributes?.banner?.data?.attributes?.url
                    }
                    alt={item?.product?.attributes?.alt}
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900 line-clamp-1 ">
                      {item?.product?.attributes?.title}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Category:</dt>
                        <dd className="inline">
                          {item?.product?.attributes?.category}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    ${item?.product?.attributes?.price}
                    <button
                      onClick={() => {
                        setItemToDelete(item.id);
                        setShowModal(true);
                      }}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${getTotalAmount()}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    onClick={handleCheckout}
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <h2 className=" text-gray-400 text-[12px] mb-28">
              Note: All Items Will be sent via Email
            </h2>
          </div>
        </div>
      </div>
      <ToastContainer />

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/10"
        >
          <div className="bg-white rounded-md shadow-lg  mx-auto w-[400px] ">
            <h3 className=" font-semibold py-4  text-center">Confirmation </h3>
            <hr />
            <p className="text-sm font-light flex flex-col items-center gap-2 py-4 ">
              <PiWarningCircleFill className=" size-8 text-red-600" />
              Are you sure you want to delete this?
            </p>
            <div className="flex text-xs font-medium justify-center gap-2 mt-4 pb-4">
              <button
                onClick={() => setShowModal(false)}
                className=" px-16 py-2 bg-white rounded border-[0.5px] border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(itemToDelete)}
                className="px-14 py-2 bg-red-100/50 border-[0.5px] border-red-300 text-red-700 rounded hover:bg-white flex gap-1 items-center"
              >
                <MdDelete className=" size-4" />
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
