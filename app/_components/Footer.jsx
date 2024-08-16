import React from "react";
import { GiAbstract118 } from "react-icons/gi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";

const socialMediaLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", ariaLabel: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", ariaLabel: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", ariaLabel: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com", ariaLabel: "GitHub" },
  { icon: FaPinterestP, href: "https://pinterest.com", ariaLabel: "Pinterest" },
];

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#up"
          >
            <span className="sr-only">Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start">
              <Link href="/">
                <GiAbstract118 className="spin w-[50px] h-[50px] text-primary" />
              </Link>
            </div>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Discover our top-notch digital products designed to meet your
              needs.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {socialMediaLinks.map(({ icon: Icon, href, ariaLabel }, index) => (
              <li key={index}>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href={href}
                  aria-label={ariaLabel}
                >
                  <Icon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
