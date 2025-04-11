"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/zamon.svg.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./i18n";
import {
  Instagram,
  Send,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Смена языка
  const languageChanger = (lng: string) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const languages = [
    { label: "UZ", code: "uz" },
    { label: "ENG", code: "en" },
    { label: "RU", code: "ru" },
  ];

  return (
    <div className="bg-cyan-700 p-3 top-0 sticky z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Image src={Logo} alt="img" className="w-28 h-auto" />

        {/* Бургер-иконка */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Десктоп-меню */}
        <div className="hidden md:flex items-center gap-6 text-white font-semibold">
          <ul className="flex gap-4">
            {[
              { name: t("Home"), id: "home" },
              { name: t("About"), id: "about" },
              { name: t("Tours"), id: "tours" },
              { name: t("Contacts"), id: "contacts" },
            ].map(({ name, id }) => (
              <li key={id}>
                <Link
                  to={`${id}`}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:border-b-2 hover:border-white transition-all duration-200 ease-in-out box-border hover:translate-y-[-2px]"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-4 items-center">
            {languages.map(({ label, code }) => (
              <li
                key={code}
                onClick={() => languageChanger(code)}
                className={`cursor-pointer transition-all duration-50 ease-in box-border hover:translate-y-[-2px] ${
                  i18n.language === code
                    ? "border-b-2 border-white font-bold"
                    : "hover:border-b-2 hover:border-white"
                }`}
              >
                {label}
              </li>
            ))}
            <Instagram className="cursor-pointer" />
            <Send className="cursor-pointer" />
          </ul>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden mt-4 text-white font-semibold flex justify-center items-center flex-col"
          >
            <ul className="flex flex-col gap-2">
              {[
                { name: t("Home"), id: "home" },
                { name: t("About"), id: "about" },
                { name: t("Tours"), id: "tours" },
                { name: t("Contacts"), id: "contacts" },
              ].map(({ name, id }) => (
                <li key={id} className="text-center">
                  <Link
                    to={`${id}`}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer hover:border-b hover:border-white py-1 transition-all duration-200 ease-in-out"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2 mt-4">
              {languages.map(({ label, code }) => (
                <li
                  key={code}
                  onClick={() => languageChanger(code)}
                  className={`cursor-pointer py-1 text-center ${
                    i18n.language === code
                      ? "border-b-2 border-white font-bold"
                      : "hover:border-b hover:border-white"
                  }`}
                >
                  {label}
                </li>
              ))}
              <div className="flex gap-4 mt-2">
                <Instagram className="cursor-pointer" />
                <Send className="cursor-pointer" />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
