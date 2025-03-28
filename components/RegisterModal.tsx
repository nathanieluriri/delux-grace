"use client";
import ModalWrapper from "@/components/elements/ModalWrapper";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

interface Props {
  externalIsOpen?: boolean;
  setExternalIsOpen?: (state: boolean) => void;
  showButton?: boolean;
  buttonText?: string;
}

const RegisterModal: FC<Props> = ({
  externalIsOpen = false,
  setExternalIsOpen,
  showButton = false,
  buttonText = "Register",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {showButton && (
        <button
          className="bg-amber-500 rounded-xl text-white px-3 py-2 inline-flex justify-center items-center gap-2 flex-1"
          onClick={() => setIsOpen(true)}
        >
          {buttonText}
          <FiArrowRight />
        </button>
      )}
      <ModalWrapper
        title="Get Registered Now"
        isOpen={isOpen || externalIsOpen}
        setIsOpen={setExternalIsOpen ? setExternalIsOpen : setIsOpen}
      >
        <p>
          Message one of our verified agents on whatsApp for your{" "}
          <span className="text-amber-500">Delux</span> registration
        </p>
        <Link
         href="https://delux-grace-api.vercel.app/whatsApplink"
          target="_blank"
          className="bg-amber-500 rounded-xl text-white px-3 py-2 inline-flex justify-center items-center gap-2 flex-1"
        >
          Register
          <FiExternalLink />
        </Link>
        <p>
          It is also important for you to join our verified social handles for
          more information on how{" "}
          <span className="text-amber-500">Delux</span> works.
        </p>
        <div className="flex gap-3 justify-center mt-4 text-sm">
          {/* Telegram stuff is below */}
          {/* <Link
            href="https://delux-grace-api.vercel.app/Telegramlink"
            className="flex flex-col items-center gap-2 flex-1 group"
          >
            <Image
              src="/telegram-logo.png"
              alt="telegram logo"
              height={100}
              width={100}
              className="w-8"
            />
            <p className="group-hover:text-amber-500">Telegram</p>
          </Link> */}
          <Link
            href="https://delux-grace-api.vercel.app/whatsApplink"
            className="flex flex-col items-center gap-2 flex-1 group"
            target="_blank"
          >
            <Image
              src="/whatsapp-logo.png"
              alt="whatsapp logo"
              height={100}
              width={100}
              className="w-8"
            />
            <p className="group-hover:text-amber-500">Whatsapp </p>
          </Link>
        </div>
      </ModalWrapper>
    </>
  );
};
export default RegisterModal;
