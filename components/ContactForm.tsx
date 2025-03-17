"use client";
import InputField from "@/components/elements/InputField";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

const ContactForm = () => {
  const formMethods = useForm<FormFields>();

  const handleSubmit = (data: FormFields) => {
    const { firstName, lastName, email, phoneNumber } = data;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      `Contact Request from ${firstName} ${lastName}`
    )}&body=${encodeURIComponent(
      `Hello,\n\nHere are the details of the contact request:\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone Number: ${phoneNumber}\n\n` +
        `Best regards,`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };
  return (
    <form onSubmit={formMethods.handleSubmit(handleSubmit)} className="">
      <h2 className="text-xl font-semibold">
        For any enquiries fill in the form.
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-4 lg:gap-6">
        <InputField
          type="text"
          label="First Name"
          placeholder="John"
          isName
          errorMessage={formMethods.formState.errors.firstName?.message}
          register={formMethods.register("firstName", {
            required: "First name is required",
          })}
          isRequired
        />
        <InputField
          type="text"
          placeholder="Doe"
          isName
          label="Last Name"
          isRequired
          errorMessage={formMethods.formState.errors.lastName?.message}
          register={formMethods.register("lastName", {
            required: "Last name is required",
          })}
        />
        <InputField
          type="email"
          placeholder="johndoe@email.com"
          label="Email Address"
          isRequired
          errorMessage={formMethods.formState.errors.email?.message}
          register={formMethods.register("email", {
            required: "Email address is required",
          })}
        />
        <InputField
          type="phoneNumber"
          label="Phone Number"
          errorMessage={formMethods.formState.errors.phoneNumber?.message}
          register={formMethods.register("phoneNumber")}
        />
        <Link
          href="https://Wa.me/+2347010138034?text=Hello!%20PHENOM%20OFFICIAL%20I'M%20READY%20TO%20GET%20REGISTERED%20ON%20PHENOM%20"
          className="bg-transparent border border-amber-500 rounded-xl text-amber-500 px-3 py-2 inline-flex justify-center items-center gap-2 flex-1 transition-colors hover:bg-amber-500 hover:text-white"
        >
          Get Coupon
          <RiCoupon3Line />
        </Link>
        <button
          type="submit"
          className="w-full flex flex-1 gap-3 py-3 px-4 justify-center items-center gap-x-2 text-sm font-medium rounded-xl bg-amber-500 text-white  focus:outline-none disabled:opacity-50"
        >
          Submit <FiSend size={16} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
