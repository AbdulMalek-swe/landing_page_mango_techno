"use client";
// import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurInfo from "../components/OurInfo";
import OurProduct from "../components/OurProduct";
import Teams from "../components/Teams";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FAQ from "../components/FAQ";
export default function Home() {
  return (
    <div className="">

      <section className="gradient-bg relative">
        <Hero />
        <div className="hidden lg:flex justify-center flex-col gap-2 items-center absolute right-12 top-1/3">
          <p className="text-2xl font-normal [writing-mode:vertical-lr] text-[#2AA7DF]">
            Scroll
          </p>
          <span className="animate-bounce ">
            <Image
              className="h-8 w-8"
              src="/assets/mouseScroll.svg"
              alt=""
              width={500}
              height={500}
            />
          </span>
        </div>
      </section>

      <section className="relative" id="our-info">
        {/* arrow up  */}
        <Image
          className="info__up__arrow  hidden absolute  lg:block "
          src="/assets/upperCArrow.svg"
          alt=""
          width={500}
          height={500}
        />
        <div className="container mx-auto px-4 py-2 ">
          <hr />
        </div>
        <OurInfo />
      </section>

      <section className="py-9 gradient-bg relative">
        {/* <Image
          className="w-52  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden absolute lg:w-[130px] xl:w-52 lg:block "
          src="/assets/downCArrow.png"
          alt=""
          width={500}
          height={500}
        /> */}
        <OurProduct />
      </section>

      <section className="gradient-bg relative">
        {/* teams  */}
        <Teams />
        <div className="absolute bottom-0 w-full h-28 flex justify-center items-center bg-gradient-to-b from-transparent via-blue-0 to-white rounded-b-md">
          <button className="primary-btn hover:bg-[#2ab5df]">
            <span>See all Member</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      <section className="">
        <FAQ />
      </section>

      <hr />

      <Footer />
    </div>
  );
}
