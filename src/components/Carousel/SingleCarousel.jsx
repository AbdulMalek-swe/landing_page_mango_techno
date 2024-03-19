"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
const SingleCarousel = () => {
  const [active, setActive] = React.useState(0);
  const [slices, setSlices] = React.useState(0);
  const data = [
    "/assets/img1.png",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611088497892-bba49c2de49c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [card, setCard] = useState({ minValue: 0, maxValue: 3 });
  const settings = {
    customPaging: function (i) {
      return (
        <div
          className={`${
            active == i ? "bg-[#2AA7DF] h-2 w-3    " : "bg-[#B3B3B3] h-2 w-2 "
          }  rounded-full  duration-200 `}
        >
          <a
            key={i}
            className={` flex items-center justify-center rounded-full bg-red-600"  
              }`}
            // Ensure sliderRef.current is not null before calling slickGoTo
          ></a>
        </div>
      );
    },
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 3,
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    beforeChange: (current, next) => {
      setActive(next);
    },

    // autoplay: true,
  };
  useEffect(() => {
    function cardItemCall() {
      if (data?.length >= 4) {
        const maxValue = Math.floor(Math.random() * data.length);
        const minValue = Math.floor(Math.random() * (data.length - 3));
        if (maxValue - minValue === 3) {
          setCard({ minValue, maxValue });
        } else {
          cardItemCall();
        }
      } else {
        setCard({ minValue: 0, maxValue: 3 });
      }
    }
    cardItemCall();
  }, [data?.length]);

  useEffect(() => {
    function cardItemCall() {
      if (data?.length >= 4) {
        const maxValue = Math.floor(Math.random() * data.length);
        const minValue = Math.floor(Math.random() * (data.length - 3));
        if (maxValue - minValue === 3) {
          setCard({ minValue, maxValue });
        } else {
          cardItemCall();
        }
      } else {
        setCard({ minValue: 0, maxValue: 3 });
      }
    }
    cardItemCall();
  }, [data?.length]);
  return (
    <div>
      <Slider {...settings}>
        {data.slice(card?.minValue, card?.maxValue).map((item) => (
          <section key={item}>
            {/* <div className="h-[539px] w-[443px] bg-red-300  flex justify-center items-center " /> */}

            <Image
              src={item}
              width={1000}
              height={1000}
              alt=""
              className="carousel__img rounded-[8px] object-cover "
            />
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default SingleCarousel;
