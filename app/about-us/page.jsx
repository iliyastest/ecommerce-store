// pages/about.js
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>

          <p className="mt-4 text-gray-300">
            We are dedicated to providing exceptional digital products to
            enhance your personal and professional life.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl hover:scale-105 duration-300 hover:border-teal-800/10 hover:shadow-teal-680/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 2h16v20H4V2zm2 3v14h12V5H6zm6 3h2v6h-2V8z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">eBooks</h2>

            <p className="mt-1 text-sm text-gray-300">
              Dive into our collection of eBooks covering a range of topics to
              broaden your knowledge and skills.
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl hover:scale-105 duration-300 hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 2h16v16H4V2zm2 4v8h12V6H6zm6 4h2v2h-2v-2z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Software</h2>

            <p className="mt-1 text-sm text-gray-300">
              Explore our range of software solutions designed to enhance your
              productivity and creativity.
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl hover:scale-105 duration-300 hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7h18v10H3V7zm2 4v2h14v-2H5zm0 4v2h14v-2H5z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Templates</h2>

            <p className="mt-1 text-sm text-gray-300">
              Find customizable templates for presentations, documents, and more
              to streamline your work.
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl hover:scale-105 duration-300 hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5h16v14H4V5zm2 2v10h12V7H6zm6 6h2v2h-2v-2z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Online Courses
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Access a variety of online courses to advance your skills and
              knowledge in various fields.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl hover:scale-105 duration-300 hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 3v18h12V3H6zm6 2v14h2V5h-2zm-4 6h12v2H8v-2z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Audio Files</h2>

            <p className="mt-1 text-sm text-gray-300">
              Discover our range of high-quality audio files for various uses
              including background music and sound effects.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl hover:scale-105 duration-300 hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16v16H4V4zm2 2v12h12V6H6z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Graphics</h2>

            <p className="mt-1 text-sm text-gray-300">
              Access a wide range of graphics and design elements to enhance
              your projects and presentations.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
