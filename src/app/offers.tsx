"use client";
import SectionTitle from "@/components/sectionTitle";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../public/images/offersImages/deals-01.jpg.png";
import img2 from "../../public/images/offersImages/offers-01.jpg.png";
import img3 from "../../public/images/offersImages/offers-02.jpg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { CarTaxiFront, Plane, Building, UsersRound } from "lucide-react";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/button";
import { Link } from "react-scroll";

const Offers: React.FC = () => {
  const cards = [
    {
      img: img1,
      title: "Dubai",
      price: "$700",
      checkIns: "300 Check Ins",
      subtitle: "Deal Includes:",
      tripsQuantity: "5 Days Trip > Hotel Included",
      airPlaneBill: "Airplane Bill Included",
      dailyPlacesVisit: "Daily Places Visit",
    },
    {
      img: img2,
      title: "Dubai",
      price: "$700",
      checkIns: "300 Check Ins",
      subtitle: "Deal Includes:",
      tripsQuantity: "5 Days Trip > Hotel Included",
      airPlaneBill: "Airplane Bill Included",
      dailyPlacesVisit: "Daily Places Visit",
    },
    {
      img: img3,
      title: "Dubai",
      price: "$700",
      checkIns: "300 Check Ins",
      subtitle: "Deal Includes:",
      tripsQuantity: "5 Days Trip > Hotel Included",
      airPlaneBill: "Airplane Bill Included",
      dailyPlacesVisit: "Daily Places Visit",
    },
    {
      img: img1,
      title: "Dubai",
      price: "$700",
      checkIns: "300 Check Ins",
      subtitle: "Deal Includes:",
      tripsQuantity: "5 Days Trip > Hotel Included",
      airPlaneBill: "Airplane Bill Included",
      dailyPlacesVisit: "Daily Places Visit",
    },
    {
      img: img2,
      title: "Dubai",
      price: "$700",
      checkIns: "300 Check Ins",
      subtitle: "Deal Includes:",
      tripsQuantity: "5 Days Trip > Hotel Included",
      airPlaneBill: "Airplane Bill Included",
      dailyPlacesVisit: "Daily Places Visit",
    },
    {
      img: img3,
      title: "Dubai",
      price: "$700",
      checkIns: "300 Check Ins",
      subtitle: "Deal Includes:",
      tripsQuantity: "5 Days Trip > Hotel Included",
      airPlaneBill: "Airplane Bill Included",
      dailyPlacesVisit: "Daily Places Visit",
    },
  ];
  return (
    <div className="mt-15" id="tours">
      <SectionTitle
        title="Best Weekly Offers In Each City"
        description="Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences."
        className="text-center w-1/2 mx-auto"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mt-10"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {cards.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[550px]">
              <Image
                src={item.img}
                alt="Offer1"
                objectFit="cover"
                layout="fill"
                className="rounded-xl"
              />
              <div className="bg-white rounded-2xl p-4 absolute top-1/4 shadow-xl w-2/4 right-10 max-xl:w-full max-xl:right-0 max-xl:top-1/3 max-lg:w-1/2 max-lg:top-1/5 max-sm:w-1/2">
                <div className="flex border-b pb-2 border-b-gray-300">
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p className="flex items-center gap-2 text-gray-400 font-semibold text-lg">
                      <UsersRound />
                      {item.checkIns}
                    </p>
                  </div>
                  <p className="text-cyan-700 font-bold text-xl">
                    {item.price}
                  </p>
                </div>
                <div className="mb-5 flex flex-col gap-3">
                  <p className="text-xl font-semibold">{item.subtitle}</p>
                  <p className="flex items-center gap-2 text-gray-400 font-semibold">
                    <CarTaxiFront />
                    {item.tripsQuantity}
                  </p>
                  <p className="flex items-center gap-2 text-gray-400 font-semibold">
                    <Plane />
                    {item.airPlaneBill}
                  </p>
                  <p className="flex items-center gap-2 text-gray-400 font-semibold">
                    <Building />
                    {item.dailyPlacesVisit}
                  </p>
                </div>
                <Link to="contacts" smooth={true} duration={500}>
                  <Button text="Make A Reservation" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SectionTitle
        title="Visa support"
        description="Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey."
        className="w-1/2 mx-auto text-center mt-15"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mt-10"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {cards.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[550px]">
              <Image
                src={item.img}
                alt="Offer1"
                objectFit="cover"
                layout="fill"
                className="rounded-xl"
              />
              <div className="bg-white rounded-2xl p-4 absolute top-1/4 shadow-xl w-2/4 right-10 max-xl:w-full max-xl:right-0 max-xl:top-1/3 max-lg:w-1/2 max-lg:top-1/5 max-sm:w-1/2">
                <div className="flex border-b pb-2 border-b-gray-300">
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p className="text-gray-400 font-semibold text-lg">
                      {item.checkIns}
                    </p>
                  </div>
                  <p className="text-cyan-700 font-bold text-xl">
                    {item.price}
                  </p>
                </div>
                <div className="mb-5 flex flex-col gap-3">
                  <p className="text-xl font-semibold">{item.subtitle}</p>
                  <p className="flex items-center gap-2 text-gray-400 font-semibold">
                    <CarTaxiFront />
                    {item.tripsQuantity}
                  </p>
                  <p className="flex items-center gap-2 text-gray-400 font-semibold">
                    <Plane />
                    {item.airPlaneBill}
                  </p>
                  <p className="flex items-center gap-2 text-gray-400 font-semibold">
                    <Building />
                    {item.dailyPlacesVisit}
                  </p>
                </div>
                <Link to="contacts" smooth={true} duration={500}>
                  <Button text="Make A Reservation" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offers;
