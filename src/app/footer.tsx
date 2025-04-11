"use client";
import Button from "@/components/button";
import bgImg from "../../public/images/footerBg/Background.png";
import Image from "next/image";
import { Link } from "react-scroll";
export default function Footer() {
  return (
    <div className="relative w-full mt-20">
      {/* Фоновое изображение на всю ширину */}
      <Image
        src={bgImg}
        alt="img"
        className="w-full max-xl:h-[300px] object-cover max-h-[300px]"
      />

      {/* Контейнер для контента */}
      <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ">
        <div className="container mx-auto px-4 flex items-center justify-around text-white max-lg:flex-col max-lg:gap-5">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-bold max-lg:text-4xl max-lg:text-center">
              Are You Looking To Travel?
            </p>
            <p className="text-2xl font-bold max-lg:text-xl max-lg:text-center">
              Make A Reservation By Clicking The Button
            </p>
          </div>
          <Link to="contacts" smooth={true} duration={500}>
            <Button text="Book Yours Now" />
          </Link>
        </div>
      </div>

      {/* Нижний текст */}
      <p className="bg-cyan-700 text-white p-7 text-xl font-semibold text-center max-lg:text-sm">
        Copyright 2025 by Muhammadumar. All rights reserved
      </p>
    </div>
  );
}
