import Image from "next/image";
import bgImg from "../../public/images/reservationBgImg/bg.png";
import Button from "@/components/button";
import Cards from "@/components/cards";

export default function Reservation() {
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
          Book Prefered Deal Here
        </p>
        <p className="text-white text-6xl font-semibold max-md:text-5xl">
          Make Your Reservation
        </p>
        <Button text="Discover More" />
      </div>
      <Cards className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 max-xl:mt-40" />
    </div>
  );
}
