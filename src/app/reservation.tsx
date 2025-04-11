"use client";
import Image from "next/image";
import bgImg from "../../public/images/reservationBgImg/bg.png";
import Button from "@/components/button";
import Cards from "@/components/cards";
import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";
import "../app/i18n";

export default function Reservation() {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative w-full mt-15" id="contacts">
      <Image
        src={bgImg}
        alt="img"
        objectFit="cover"
        className="z-10 w-full h-[600px]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
        <p className="text-white text-3xl font-semibold max-md:text-2xl">
          {t("ReservationTitle")}
        </p>
        <p className="text-white text-6xl font-semibold max-md:text-5xl">
          {t("ReservationSubtitle")}
        </p>
        <Link to="contacts" smooth={true} duration={500}>
          <Button text={t("ExploreMoreButton")} />
        </Link>
      </div>
      <Cards className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 max-xl:mt-40" />
    </div>
  );
}
