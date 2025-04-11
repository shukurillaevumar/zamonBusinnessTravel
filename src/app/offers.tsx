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
import { useTranslation } from "react-i18next";
import "../app/i18n";

const Offers: React.FC = () => {
  const { t, i18n } = useTranslation();
  const cards = [
    {
      img: img1,
      title: t("OffersCityName"),
      price: "$700",
      checkIns: t("OffersCheckIns"),
      subtitle: t("OffersIncludes"),
      tripsQuantity: t("OffersQuantity"),
      airPlaneBill: t("OffersAirBill"),
      dailyPlacesVisit: t("OffersDailyPlacesVisit"),
    },
    {
      img: img2,
      title: t("OffersCityName"),
      price: "$700",
      checkIns: t("OffersCheckIns"),
      subtitle: t("OffersIncludes"),
      tripsQuantity: t("OffersQuantity"),
      airPlaneBill: t("OffersAirBill"),
      dailyPlacesVisit: t("OffersDailyPlacesVisit"),
    },
    {
      img: img3,
      title: t("OffersCityName"),
      price: "$700",
      checkIns: t("OffersCheckIns"),
      subtitle: t("OffersIncludes"),
      tripsQuantity: t("OffersQuantity"),
      airPlaneBill: t("OffersAirBill"),
      dailyPlacesVisit: t("OffersDailyPlacesVisit"),
    },
    {
      img: img1,
      title: t("OffersCityName"),
      price: "$700",
      checkIns: t("OffersCheckIns"),
      subtitle: t("OffersIncludes"),
      tripsQuantity: t("OffersQuantity"),
      airPlaneBill: t("OffersAirBill"),
      dailyPlacesVisit: t("OffersDailyPlacesVisit"),
    },
    {
      img: img2,
      title: t("OffersCityName"),
      price: "$700",
      checkIns: t("OffersCheckIns"),
      subtitle: t("OffersIncludes"),
      tripsQuantity: t("OffersQuantity"),
      airPlaneBill: t("OffersAirBill"),
      dailyPlacesVisit: t("OffersDailyPlacesVisit"),
    },
    {
      img: img3,
      title: t("OffersCityName"),
      price: "$700",
      checkIns: t("OffersCheckIns"),
      subtitle: t("OffersIncludes"),
      tripsQuantity: t("OffersQuantity"),
      airPlaneBill: t("OffersAirBill"),
      dailyPlacesVisit: t("OffersDailyPlacesVisit"),
    },
  ];
  return (
    <div className="mt-15" id="tours">
      <SectionTitle
        title={t("WeekOffers")}
        description={t("WeekOffersSubtitle")}
        className="text-center w-1/2 mx-auto max-lg:w-2/3"
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
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {cards.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[500px] h-[400px] max-xl:w-full">
              <Image
                src={item.img}
                alt="Offer1"
                fill
                className="object-cover"
              />
              <div className="bg-white rounded-2xl p-4 absolute top-5 shadow-xl w-2/4 right-2 max-xl:w-2/3 max-xl:right-15 max-xl:top-2 max-lg:w-2/3 max-lg:top-5 max-lg:right-15 max-sm:w-2/3 max-sm:right-1/6">
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
                  <Button text={t("ReservationButton")} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SectionTitle
        title="Visa support"
        description="Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey."
        className="w-1/2 mx-auto text-center mt-15 max-lg:w-2/3"
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
            <div className="relative w-[500px] h-[400px] max-xl:w-full ">
              <Image
                src={item.img}
                alt="Offer1"
                objectFit="cover"
                layout="fill"
                className="rounded-xl"
              />
              <div className="bg-white rounded-2xl p-4 absolute top-5 shadow-xl w-2/4 right-2 max-xl:w-2/3 max-xl:right-15 max-xl:top-2 max-lg:w-2/3 max-lg:top-5 max-lg:right-15 max-sm:w-2/3 max-sm:right-1/6">
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
                  <Button text={t("ReservationButton")} />
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
