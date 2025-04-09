"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { User, Globe, House } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Antalia from "../../public/images/mainBackgroundImages/antaliya.jpg";
import Turkey from "../../public/images/mainBackgroundImages/turkey.webp";
import London from "../../public/images/mainBackgroundImages/london.jpg";
import Button from "./button";
import { Link } from "react-scroll";

const slides = [
  {
    image: Antalia,
    cityName: "Antalya",
    stats: [
      {
        icon: <User />,
        title: "Population:",
        description: "8.66 M",
      },
      {
        icon: <Globe />,
        title: "Territory:",
        description: "41.290 KM2",
      },
      {
        icon: <House />,
        title: "AVG Price:",
        description: "$1.100.200",
      },
    ],
  },
  {
    image: Turkey,
    cityName: "Turkish",
    stats: [
      {
        icon: <User />,
        title: "Population:",
        description: "10 M",
      },
      {
        icon: <Globe />,
        title: "Territory:",
        description: "50.000 KM2",
      },
      {
        icon: <House />,
        title: "AVG Price:",
        description: "$950.000",
      },
    ],
  },
  {
    image: London,
    cityName: "London",
    stats: [
      {
        icon: <User />,
        title: "Population:",
        description: "9 M",
      },
      {
        icon: <Globe />,
        title: "Territory:",
        description: "45.000 KM2",
      },
      {
        icon: <House />,
        title: "AVG Price:",
        description: "$1.300.000",
      },
    ],
  },
];

export default function Slider() {
  return (
    <div className="w-full h-screen" id="home">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image.src}
                alt={`Слайд ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-6">
                <p className="text-white text-2xl font-bold max-md:text-xl text-center">
                  Take a Glimpse Into The Beautiful City Of:
                </p>
                <h2 className="text-white text-6xl font-bold max-md:text-4xl">
                  {slide.cityName}
                </h2>
                <Link to="about" smooth={true} duration={500}>
                  <Button text="Go there" />
                </Link>
              </div>

              {/* Статистика */}
              <div className="bg-white p-5 rounded-full w-1/2 absolute top-1/2 transform left-1/2 -translate-x-1/2 translate-y-80 z-10 max-2xl:w-full max-md:top-1/3 max-md:rounded-xl max-md:p-2">
                <div className="flex justify-between items-center flex-wrap max-md:gap-5">
                  {slide.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center gap-5 shrink"
                    >
                      <div className="p-5 border rounded-full border-cyan-400 text-cyan-700">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 font-semibold text-lg max-md:text-sm">
                          {stat.title}
                        </p>
                        <p className="text-cyan-700 font-semibold text-xl max-md:text-sm">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Link to="about" smooth={true} duration={500}>
                    <Button text="Explore More" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
