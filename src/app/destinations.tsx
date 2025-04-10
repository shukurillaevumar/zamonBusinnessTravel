"use client";
import SectionTitle from "@/components/sectionTitle";
import img1 from "../../public/images/destinationImages/afr.jpg.png";
import img2 from "../../public/images/destinationImages/airplane.jpg.png";
import img3 from "../../public/images/countriesImages/country-02.jpg.png";
import img4 from "../../public/images/countriesImages/dubai2.jpg.png";
import img5 from "../../public/images/countriesImages/istanbul3.jpg.png";
import img6 from "../../public/images/countriesImages/sharm2.jpg.png";
import Image from "next/image";
import Button from "@/components/button";

import { User, Globe, House, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

export default function Destinations() {
  const card = [
    {
      img: img1,
      title: "Cheap Railway Tickets With Us",
      underTitle: "Whole world",
      description:
        "Embark on a railway adventure and explore destinations worldwide. Whether it's thepicturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique andcomfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, allaccessible through our extensive railway network. .",
    },
    {
      img: img2,
      title: "Cheap Railway Tickets With Us",
      underTitle: "Whole world",
      description:
        "Embark on a railway adventure and explore destinations worldwide. Whether it's thepicturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique andcomfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, allaccessible through our extensive railway network. .",
    },
  ];

  const card2 = [
    {
      img: img3,
      title: "Cheap Railway Tickets With Us",
      underTitle: "Whole world",
      description:
        "Embark on a railway adventure and explore destinations worldwide. Whether it's thepicturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique andcomfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, allaccessible through our extensive railway network. .",
      population: "8.66 Mil People",
      territory: "41.290 km2",
      price: "$1.100.200",
    },
    {
      img: img4,
      title: "Cheap Railway Tickets With Us",
      underTitle: "Whole world",
      description:
        "Embark on a railway adventure and explore destinations worldwide. Whether it's thepicturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique andcomfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, allaccessible through our extensive railway network. .",
      population: "8.66 Mil People",
      territory: "41.290 km2",
      price: "$1.100.200",
    },
    {
      img: img5,
      title: "Cheap Railway Tickets With Us",
      underTitle: "Whole world",
      description:
        "Embark on a railway adventure and explore destinations worldwide. Whether it's thepicturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique andcomfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, allaccessible through our extensive railway network. .",
      population: "8.66 Mil People",
      territory: "41.290 km2",
      price: "$1.100.200",
    },
    {
      img: img6,
      title: "Cheap Railway Tickets With Us",
      underTitle: "Whole world",
      description:
        "Embark on a railway adventure and explore destinations worldwide. Whether it's thepicturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique andcomfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, allaccessible through our extensive railway network. .",
      population: "8.66 Mil People",
      territory: "41.290 km2",
      price: "$1.100.200",
    },
  ];
  return (
    <div className="mt-15 w-2/3 mx-auto max-md:w-full max-md:p-2" id="about">
      <SectionTitle
        title="Explore Destinations with Ease"
        description="Find the best deals on railway and airplane tickets in each city, carefully selected for you."
        className="flex flex-col w-1/2 max-md:text-center"
      />
      <div className="flex flex-col mt-10 gap-10">
        {card.map((item, index) => (
          <div className="flex gap-5 items-center max-lg:flex-col" key={index}>
            <Image src={item.img} alt="img" width={400} />
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-bold text-xl">{item.title}</p>
                  <p className="text-gray-400 text-lg">{item.underTitle}</p>
                </div>
                <Link to="contacts" smooth={true} duration={500}>
                  <Button text="Explore More" />
                </Link>
              </div>
              <p className="text-gray-400 text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <SectionTitle
        title="Visit One Of Our Countries Now"
        description="Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences."
        className="w-1/2 mt-15"
      />
      <div className="flex flex-col mt-10 gap-10">
        {card2.map((item, index) => (
          <div className="flex gap-5 items-start max-lg:flex-col" key={index}>
            <Image src={item.img} alt="img" width={400} objectFit="cover" />
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-bold text-xl">{item.title}</p>
                  <p className="text-gray-400 text-lg">{item.underTitle}</p>
                </div>
                <Link to="contacts" smooth={true} duration={500}>
                  <Button text="Explore More" />
                </Link>
              </div>
              <p className="text-gray-400 text-lg">{item.description}</p>
              <div className="flex justify-between border-y py-4 border-y-gray-300">
                <p className="flex items-center gap-2 text-lg text-gray-400 font-semibold">
                  <User />
                  {item.population}
                </p>
                <p className="flex items-center gap-2 text-lg text-gray-400 font-semibold">
                  <Globe />
                  {item.territory}
                </p>
                <p className="flex items-center gap-2 text-lg text-gray-400 font-semibold">
                  <House />
                  {item.price}
                </p>
              </div>
              <p className="flex items-center gap-2 text-cyan-700 font-semibold text-lg cursor-pointer">
                <Link
                  to="contacts"
                  smooth={true}
                  duration={500}
                  className="flex items-center"
                >
                  Need Directions ?
                  <ArrowRight className="cursor-pointer hover:translate-x-2 ease-in duration-150" />
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
