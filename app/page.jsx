"use client";
// import ContactForm from "@/components/ContactForm";
import Card from "@/components/elements/Card";
import Container from "@/components/elements/Container";
import RegisterModal from "@/components/RegisterModal";
import Image from "next/image";
import Link from "next/link";
import { FaEarthAfrica, FaTiktok } from "react-icons/fa6";
import { FiClock,FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";



function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 13000 })]); // Autoplay every 3s
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slides, ] = useState([0, 1,]); // Dummy slides

  // Handle Next and Prev
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Track the selected slide for dots navigation
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);
  const listOfImages =["/ghana.jpg","/cameroon.jpg"]
  return (
    <div className="relative w-full max-w-[500px]  mx-auto">
      {/* Carousel */}
      <div className="overflow-hidden " ref={emblaRef}>
        <div className="flex w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className=" flex-[0_0_100%] w-full pr-20 bg-contain  p-4 flex m-auto justify-self-center items-center justify-center h-full text-white text-2xl font-bold rounded-lg"
              style={{ backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#FFFFFF" }} // Alternate colors
            >
              Slide {slide}
              <Image
            src={listOfImages[slide]}
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-xl object-cover w flex-1"
          />
            </div>
          ))}
        </div>
      </div>

      {/* Next & Prev Buttons */}
      <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-zinc-300 text-white p-2 rounded-full">
      <FiArrowLeft color="black" />
      </button>
      <button onClick={scrollNext} className="absolute right-[10] top-1/2 -translate-y-1/2 bg-white border border-zinc-300 text-white p-2 rounded-full">
      <FiArrowRight color="black" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center  mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${index === selectedIndex ? "bg-black" : "bg-gray-300"}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}


export default function HomePage() {
  return (
    <main className="space-y-16">
     
      <Container className="">
        <Card className="flex flex-col lg:flex-row gap-5 items-center lg:items-start">
          <Image
            src="/hero-image.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-xl object-cover w flex-1"
          />
          <div className="space-y-3 flex-1 ">
            <h3 className="font-bold text-3xl md:text-5xl text-amber-500">
              WHAT IS DELUX?
            </h3>
            <div className="space-y-3">
              <p>
                <span className="text-amber-500">DELUX</span> represents
                elegancy, abundance, inclusive and stabilization. DELUX is a
                global Affiliate assistant across Africa that helps different
                individuals work from home and get paid at ease.
              </p>
              <p>
                On <span className="text-amber-500">DELUX</span> we offer you
                the opportunity to access different remote jobs here on our
                platform easily! Here we empower you, stabilize you financially,
                and make sure your financial independent and boyant.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/2347076159894?text=Hello I am interested in getting a coupon code for Phenom"
                  className="bg-transparent border border-amber-500 rounded-xl text-amber-500 px-3 py-2 inline-flex justify-center items-center gap-2 flex-1 transition-colors hover:bg-amber-500 hover:text-white"
                >
                  Get Job Permit Now!
                  <RiCoupon3Line />
                </Link>

                <RegisterModal showButton />
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <Container className="flex flex-col gap-6 justify-center items-center">
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FaEarthAfrica /> We Are Government Approved
        </Card>

        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <Card className="space-y-4 order-2 lg:order-1">
            <h3 className="font-bold text-3xl md:text-5xl text-amber-500">
              Register Now!
            </h3>
            <p>
              Delux (Affiliate Platform) is government-approved, ensuring safety
              and reliability for all users across Africa. Officially
              recognized, Delux meets all regulatory standards, making our
              services secure and trustworthy for everyone.
            </p>
            <RegisterModal showButton buttonText="Click Here to Register" />
          </Card>
          <Image
            src="/government-approved.jpg"
            alt="we are multinational image"
            width={500}
            height={500}
            className="rounded-xl  object-cover "
          />
        </div>
      </Container>

      <Container className="flex flex-col gap-4">
        <Card className="flex items-center gap-3 mx-auto px-4 py-2 w-max">
          <FiClock /> Opportunities
        </Card>
        <Card className="flex flex-col lg:flex-row gap-5 items-center lg:items-start">
          <Image
            src="/promo-image.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-xl object-cover w flex-1"
          />
          <div className="space-y-3 flex-1 ">
            <h3 className="font-bold text-3xl md:text-5xl text-amber-500">
              WHAT ARE DELUX OPPORTUNITIES?
            </h3>
            <div className="space-y-3">
              <p>
                <span className="text-amber-500">DELUX</span> platform offers
                different earning opportunities for its users:
              </p>
              <p>
                <span className="text-amber-500">1.</span> Over 20 different
                online job Opportunities for everyone. ( Pick anyone of your
                choice)
              </p>
              <p>
                <span className="text-amber-500">2.</span> Over 10 Online Skills
                Development coming with Certificates
              </p>
              <p>
                <span className="text-amber-500">3.</span>Earn N2,500 (€1.50)
                from Watching Video Clips
              </p>
              <p>
                <span className="text-amber-500">4.</span>By streaming music,
                users earn N2,000 (€1.00) for each track,
              </p>
              <p>
                <span className="text-amber-500">5.</span> Earn N3,000 (€1.20)
                by sending reviews daily
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/2347076159894?text=Hello I am interested in getting a coupon code for Phenom"
                  className="bg-transparent border border-amber-500 rounded-xl text-amber-500 px-3 py-2 inline-flex justify-center items-center gap-2 flex-1 transition-colors hover:bg-amber-500 hover:text-white"
                >
                  Get Job Permit Now!
                  <RiCoupon3Line />
                </Link>

                <RegisterModal showButton />
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <Container className="flex flex-col gap-6 justify-center items-center">
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FaEarthAfrica /> Work With Us
        </Card>

        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <Card className="space-y-4 order-2 lg:order-1">
            <h3 className="font-bold text-3xl md:text-5xl text-amber-500">
              What Are You Waiting For!
            </h3>
            <p>
              Work with Foreigners on Delux, and Earn in Euros Delux is A
              Revolutionised Remote Job opportunity that offers you remote
              digital jobs, where you work for foreign brands and get paid.
              <br />
              <br />
              Join Delux to experience the freedom to earn in Euros anywhere, &
              anytime and get paid in your local currency from the comfort of
              your home. Delux: connecting you globally, rewarding you locally
            </p>
            <RegisterModal showButton buttonText="Click Here to Register" />
          </Card>
          <Image
            src="/work-with-us.jpg"
            alt="we are multinational image"
            width={500}
            height={500}
            className="rounded-xl  object-cover "
          />
        </div>
      </Container>

      <Container className="space-y-5">
        <Card className="flex items-center gap-3 mx-auto px-4 py-2 w-max">
          <FiClock /> Earn with us
        </Card>
        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <Card className="space-y-4 order-2 lg:order-1">
            <h3 className="font-bold text-3xl md:text-5xl text-amber-500">
              Join us today
            </h3>
            <p>
              Delux Users will earn in Euros but their earnings will be
              converted into their local currency based on their country.
              <br />
              <br />
              30 Euros = 60,000 NGN (Nigeria)
              <br />
              <br />
              30 Euros = 80 GHS (Ghana)
              <br />
              <br />
              This means that users in Nigeria will receive their earnings in
              Naira (NGN), those in Ghana in Ghanaian Cedi (GHS), those in
              Cameroon Franc (XAF).
            </p>
            <RegisterModal showButton buttonText="Click Here to Register" />
          </Card>
          <Image
            src="/earn-in-euros.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-3xl order-1 lg:order-2 object-contain flex-1"
          />
        </div>
      </Container>

      <Container className="space-y-5">
        <Card className="flex items-center gap-3 mx-auto px-4 py-2 w-max">
          <FiClock /> Features
        </Card>
        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <Card className="space-y-4 order-2 lg:order-1">
            <h3 className="font-bold text-3xl md:text-5xl text-amber-500">
              (Delux Affiliate Features Skills)
            </h3>
            <p>
              Aquire any skills of your choice with a certificate from delux
              affiliate platform.
              <br />
              - Facebook & TikTok monetization.
              <br />
              - Graphics designing
              <br />
              - Freelancing
              <br />
              - Google ads
              <br />
              - Affiliate marketing
              <br />
              - video editing
            </p>
            <RegisterModal showButton buttonText="Click Here to Register" />
          </Card>
          <Image
            src="/features.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-3xl order-1 lg:order-2 object-contain flex-1"
          />
        </div>
      </Container>

      <Container className="flex flex-col gap-0 justify-center items-center">
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FaEarthAfrica />DELUX IS GLOBAL! (For All African Countries)
        </Card>

        <EmblaCarousel/>
      </Container>

      <Container className="space-y-5">
        <Card className="flex items-center gap-3 mx-auto px-4 py-2 w-max">
          <FaTiktok /> Monetize your socials
        </Card>
        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <Card className="space-y-4 order-2 lg:order-1">
            <h3 className="font-bold text-3xl md:text-5xl text-amber-500">
              Delux + your Tiktok = Cash
            </h3>
            <p>
              Delux is a foreign media brand that has been paying her users for
              simply watching, liking and sharing their videos on social media
              platforms.
              <br />
              <br />
              Youll earn in Euros and Delux will convert the earnings to Naira
              and pay straight to your local bank account. Earn extra cash
              during your free time from streaming music to earn & watching
              short movie clips to earn extra cash too.
            </p>
            <RegisterModal showButton buttonText="Click Here to Register" />
          </Card>
          <Image
            src="/monetize-tiktok.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-3xl order-1 lg:order-2 object-contain flex-1"
          />
        </div>
      </Container>
      {/* <Container className="flex flex-col gap-6 justify-center" width="3xl">
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FiMail /> Contact Us
        </Card>
        <Card>
          <ContactForm />
        </Card>
      </Container> */}
    </main>
  );
}
