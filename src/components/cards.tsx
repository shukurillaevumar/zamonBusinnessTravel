interface CardsProps {
  className: string;
}

import { Phone, Mail, MapPin } from "lucide-react";

export default function Cards({ className = "" }: CardsProps) {
  const card = [
    {
      icon: Phone,
      title: "Make a Phone Call",
      description: "+998 99 299 99 96",
    },
    {
      icon: Mail,
      title: "Contact Us via Email",
      description: "zamonbiznestour@mail.ru",
    },
    {
      icon: MapPin,
      title: "Visit Our Offices",
      description: "15/25, Chilanzar - 9, Tashkent city",
    },
  ];
  return (
    <div
      className={`${className} flex justify-center items-center gap-5 flex-wrap w-full`}
    >
      {card.map((item, index) => (
        <div
          className="rounded-xl bg-white shadow-2xl w-[400px] h-[200px] flex flex-col items-center justify-center"
          key={index}
        >
          <div className="mb-4 bg-gray-100 p-5 rounded-full text-cyan-700">
            <item.icon />
          </div>
          <p className="text-xl font-bold">{item.title}</p>
          <p className="text-center text-cyan-700 font-semibold text-lg">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
