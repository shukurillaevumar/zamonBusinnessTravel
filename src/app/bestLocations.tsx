"use client";

import SectionTitle from "@/components/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../public/images/offersImages/deals-01.jpg.png";
import img2 from "../../public/images/offersImages/offers-01.jpg.png";
import img3 from "../../public/images/offersImages/offers-02.jpg.png";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
export default function BestLocation() {
  const card = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
  ];
  return (
    <div className="mt-15">
      <SectionTitle
        title="Best Locations"
        description="Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences."
        className="text-center mx-auto w-1/2"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
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
        {card.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[500px] h-[400px] max-xl:w-full">
              <Image
                src={item.img}
                alt="Offer1"
                objectFit="cover"
                layout="fill"
                className="rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
