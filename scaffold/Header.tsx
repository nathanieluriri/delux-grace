"use client";
import Container from "@/components/elements/Container";
import RegisterModal from "@/components/RegisterModal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiUserPlus } from "react-icons/fi";

const Header = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  return (
    <header className=" sticky top-0 bg-white z-50 border-b">
      <Container className="flex justify-between py-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Phenom logo"
            width={200}
            height={90}
            className=" w-[7rem]"
          />
        </Link>
        <button
          onClick={() => setOpenRegisterModal(true)}
          className="bg-amber-600 rounded-xl text-white px-3 py-2 flex justify-center items-center gap-2"
        >
          <FiUserPlus />
          Register
        </button>
        <RegisterModal
          externalIsOpen={openRegisterModal}
          setExternalIsOpen={setOpenRegisterModal}
        />
      </Container>
    </header>
  );
};

export default Header;
