import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl py-32 px-4 lg:h-screen ">
          <div className="mx-auto sm:max-w-[600px]  text-center ">
            <h1 className=" text-3xl font-extrabold sm:text-5xl ">
              All Your Digital Products
              <strong className="font-extrabold text-teal-700 ">
                {" "}
                Is One Click Away.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Manage all your digital products easily.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className=" w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                href="#started"
              >
                Get Started
              </a>

              <Link
                className=" w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
                href="/about-us"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
