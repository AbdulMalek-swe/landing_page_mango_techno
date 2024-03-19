import React from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import Image from "next/image";

const Teams = () => {
  const data = [
    {
      name: "Abul Hasem",
      position: "CEO & Founder",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "maruf hassan",
      position: "FRONTEND TEAM LEADER",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "iMRAN HOSSAIN",
      position: "BACKEND TEAM LEADER",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "MIZANUR RAHMAN",
      position: "SENIOUR SOFTWARE ENGINEER",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "YEASIR ARAFAT",
      position: "SENIOUR DEVELOPER",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "MIZANUR RAHMAN",
      position: "SENIOUR SOFTWARE ENGINEER",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "YEASIR ARAFAT",
      position: "SENIOUR DEVELOPER",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "YEASIR ARAFAT",
      position: "SENIOUR DEVELOPER",
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center py-8 lg:py-14 self-stretch">
        <h3 className="uppertitle">Meet Our Teams</h3>
        <h1 className="title lg:px-40 text-center relative">
          Meet our team of Creators, Designers, and world-class Problem Solvers
          {/*teams title  underline  */}
          <Image
            className="team__title__underline absolute "
            src="/assets/line.svg"
            alt=""
            width={500}
            height={500}
          />
        </h1>
      </div>

      <div className="py-2 lg:py-5">
        <h3 className="subtitle">Meet Our Leader</h3>
        <p className="content ">
          Our team is Dedicated to helping world-class professional Software
          build and improve their business with our industry-leading software.
        </p>
      </div>

      {/* leader carousal  */}
      <div>
        <Carousel />
      </div>

      <div className="py-2 lg:py-5">
        <h3 className="subtitle">Meet Our Member</h3>
        <p className="content">
          Our team is Dedicated to helping world-className professional Software
          build and improve their business with our industry-leading software.
        </p>
      </div>
      {/* member cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 relative">
        {data?.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
