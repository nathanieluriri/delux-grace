import Card from "@/components/elements/Card";
import Container from "@/components/elements/Container";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = ({}) => {
  return (
    <footer className="mt-12">
      <Container className="flex flex-col md:flex-row justify-center items-center gap-6 md:justify-between py-7">
        <div className="flex flex-col items-center gap-3 order-2 md:order-1">
          <Link href="#">
            <Image
              src="/logo.png"
              alt="Phenom logo"
              width={200}
              height={200}
              className=" w-[7rem]"
            />
          </Link>
          <p className="text-sm ">
            All rights reserved @Phenom {new Date().getFullYear()}
          </p>
          <Link href="/privacy-policy" className="underline text-sm">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 order-1 md:order-2">
          <p className="">Connect With Us</p>
          <div className="flex gap-3">
            <Link
              href="https://Wa.me/+2348104124886?text=Hello!%20Coach%20I'm%20Ready%20To%20Pay%20For%20Phenom%20Registration%20Fee.%20"
              target="_blank"
              className="group"
            >
              <Card className="p-2 !px-2 rounded-xl group-hover:bg-amber-500 transition-all duration-150 group-hover:rounded-full">
                <FaWhatsapp size={23} />
              </Card>
            </Link>
            <Link href="https://t.me/earnbigonphenom" className="group">
              <Card className="p-2 !px-2 rounded-xl group-hover:bg-amber-500 transition-all duration-150 group-hover:rounded-full">
                <FaTelegramPlane size={23} />
              </Card>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
