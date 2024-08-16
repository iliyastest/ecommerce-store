import React, { useContext, useEffect } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    if (cart?.length > 0) {
      router.prefetch("/cart");
    }
  }, [cart?.length, router]);

  return (
    <div className="h-[300px] w-[250px] z-10 bg-gray-100 rounded-md border shadow-sm absolute right-10 top-12 px-5 overflow-auto pb-5">
      <div className="mt-5 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <img
                src={item?.product?.attributes?.banner?.data?.attributes?.url}
                alt={item?.product?.attributes?.alt}
                className="size-16 rounded object-cover"
              />
              <div>
                <h3 className="text-sm text-gray-900 font-semibold line-clamp-1">
                  {item?.product?.attributes?.title}
                </h3>
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline">
                      {item?.product?.attributes?.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">
                      {item?.product?.attributes?.price}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 text-center mt-5">
        <Link
          href="/cart"
          className="block rounded w-[200px] bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          View my cart ({cart?.length})
        </Link>

        <Link
          href="/"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
