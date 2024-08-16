"use client";
import { RiMenu3Fill } from "react-icons/ri";
import React, { useContext, useEffect, useState } from "react";
import { GiAbstract118 } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { UserButton, useUser } from "@clerk/nextjs";
import { MdHome } from "react-icons/md";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { MdContacts } from "react-icons/md";
import { CartContext } from "../_context/CartContext";
import CartApi from "../_utils/CartApi";
import Cart from "./Cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

const menus = [
  { name: "Home", link: "/", imo: <MdHome /> },
  { name: "About Us", link: "/about-us", imo: <TbArrowRoundaboutRight /> },
  { name: "Contact Us", link: "/contact-us", imo: <MdContacts /> },
];

const Header = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  useEffect(() => {
    router.prefetch("/sign-in");
    router.prefetch("/sign-up");
  }, [router]);

  const handelOpenCart = () => {
    setOpenCart(!openCart);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getCartItems = () => {
    CartApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log("res cart", res.data.data);
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };

  return (
    <>
      <span id="up"></span>
      <header className=" bg-white shadow-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <GiAbstract118 className="spin w-[50px] h-[50px] text-primary" />
          </Link>
          {/* md devices menu */}
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href={menu.link}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    href="/sign-in"
                  >
                    Login
                  </Link>
                  <Link
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary/75 sm:block"
                    href="sign-up"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className=" flex items-center gap-5">
                  <button
                    onClick={handelOpenCart}
                    className=" flex gap-1 cursor-pointer  hover:text-primary"
                  >
                    <FaCartShopping className="text-xl" />({cart?.length})
                  </button>
                  <UserButton />
                  <div
                    onClick={handelOpenCart}
                    className={`${
                      openCart ? "-translate-y-0" : "-translate-y-full"
                    } fixed h-full w-screen top-0 left-0 z-50 bg-white/5 duration-300 `}
                  >
                    <Cart />
                  </div>
                </div>
              )}
              <button
                className="block rounded text-sm bg-gray-100 p-2.5 text-gray-600 transition hover:bg-primary hover:text-white md:hidden"
                onClick={handleOpen}
              >
                <RiMenu3Fill />
              </button>
            </div>
          </div>
        </div>

        {/* small devices menu */}
        <div
          onClick={handleOpen}
          className={`${
            isOpen ? "-translate-x-0" : "translate-x-full"
          } fixed h-full w-screen top-0 left-0 bg-black/50 z-50 backdrop-blur-sm duration-300  md:hidden`}
        >
          <div className="absolute top-0 right-0 h-screen w-1/2 bg-black/80 z-10">
            {/* nav menu */}
            <nav aria-label="Global" className="mt-28 ">
              <ul className="flex flex-col justify-center mx-8 gap-6 text-sm">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <Link
                      className="flex items-center justify-between text-white transition hover:text-primary"
                      href={menu.link}
                    >
                      {menu.name}
                      <h1 className=" text-xl">{menu.imo}</h1>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
