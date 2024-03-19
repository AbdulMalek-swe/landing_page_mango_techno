import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 mt-6">
      <div>
        <div className="flex lg:space-x-7 flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className=" w-full lg:w-1/4">
            <div>
              <Image
                src="/assets/logo.svg"
                width={1000}
                height={1000}
                alt=""
                className="w-32 h-12   "
              />
            </div>
            <p className="pt-4 pb-0 m-0 md:text-sm text-xs">
              We are a team of high-performing self-managed engineers and
              leaders delivering purposeful technology solutions for the future.
            </p>
          </div>
          <div className="w-full lg:w-3/4 grid md:grid-cols-4 grid-cols-2 gap-x-6 gap-y-4 md:gap-y-0">
            <div>
              <p className="text-[#AFAFAF] text-sm font-normal pb-3.5 m-0">
                Digital Product Engineering
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  API Enablement services
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Custom Software Development
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Digital Customer Experience
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Mobile Application Development
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[#AFAFAF] text-sm font-normal pb-3.5 m-0">
                Cloud Platform
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  App Modernization
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Data on Cloud
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Cloud-Native Development
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  DevOps Engineering
                </li>
                <li className="text-[#545454] md:text-sm text-xs  "> Data</li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Data Management
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Data Visualization
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Artificial Intelligence
                </li>
              </ul>
            </div>

            <div className="w-full">
              <p className="text-[#AFAFAF] text-sm font-normal pb-3.5 m-0">
                Engagement Models
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Product Engineering Methodology
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Managed Team Extension
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Product Oriented Delivary
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Build Operate & Transfer
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Industries
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Healthcare Services
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  SaaS/ISV
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Retail and CPG
                </li>
              </ul>
            </div>
            <div className="w-full">
              <p className=" text-[#AFAFAF] md:text-sm text-xs font-normal pb-3.5 m-0">
                About US
              </p>
              <ul className="space-y-2">
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  CEO Speak
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Employee Speak
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Impact on the World
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Client Speak
                </li>

                <li className="text-[#545454] md:text-sm text-xs  "> CSR</li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Insights
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Careers
                </li>
                <li className="text-[#545454] md:text-sm text-xs  ">
                  {" "}
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-8 mb-5 text-[#B3B3B3] h-1" />
      </div>
      <FooterEnd />
    </footer>
  );
};

export default Footer;

const FooterEnd = () => {
  return (
    <div className="flex items-center justify-between pb-5">
      <div>
        <span className="text-[#545454] text-xs md:text-sm  font-normal">
          © 2024 Cdda Ltd. All rights reserved.
        </span>
      </div>
      <div className="flex justify-between space-x-6">
        <span className="text-gray-600 hover:text-[#2aa7df] hover:bg-[#2aa6df1c] cursor-pointer p-2 rounded-md flex justify-center items-center">
          <FaTwitter />
        </span>
        <span className="text-gray-600 hover:text-[#2aa7df] hover:bg-[#2aa6df1c] cursor-pointer p-2 rounded-md flex justify-center items-center">
          <FaLinkedin />
        </span>
        <span className="text-gray-600 hover:text-[#2aa7df] hover:bg-[#2aa6df1c] cursor-pointer p-2 rounded-md flex justify-center items-center">
          <FaFacebook />
        </span>
        <span className="text-gray-600 hover:text-[#2aa7df] hover:bg-[#2aa6df1c] cursor-pointer p-2 rounded-md flex justify-center items-center">
          <FaGithub />
        </span>
      </div>
    </div>
  );
};
