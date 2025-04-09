// "use client";
import BestLocation from "./bestLocations";
import Destinations from "./destinations";
import Footer from "./footer";
import Form from "./form";
import Main from "./main";
import Menu from "./menu";
import Offers from "./offers";
import Reservation from "./reservation";
import dynamic from "next/dynamic";

// const Map = dynamic(() => import("../components/map"), { ssr: false });

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Menu />
      <Main />
      <Offers />
      <Destinations />
      <BestLocation />
      <Reservation />
      {/* <Map key="map-key" /> Добавлен уникальный ключ */}
      <Form />
      <Footer />
    </div>
  );
}
