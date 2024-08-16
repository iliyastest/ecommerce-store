"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mwpeoygg");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    return formData.name && formData.email && formData.message;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring "
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring "
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring "
            placeholder="Message"
            rows="8"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white hover:bg-teal-700 sm:w-auto"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

function ContactUs() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Have questions or need support with our digital products? We’re
              here to help! Reach out to us for any inquiries, technical
              support, or feedback. Your satisfaction is our priority, and we’re
              committed to providing excellent customer service.
            </p>

            <div className="mt-8">
              <a
                href="tel:01514754450"
                className="text-2xl font-bold text-primary"
              >
                0151 475 4450
              </a>
              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
