"use client";
import Button from "@/components/button";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

import { useTranslation } from "react-i18next";
import "../app/i18n";

export default function Form() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const SendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = "7575586675:AAGe-jkvgQN4gCi_1pP8d4teZjyWENYVGYc";
    const chatId = 7297266784;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Собираем все данные из формы
    const formData = new FormData(event.target as HTMLFormElement);
    const formEntries = Object.fromEntries(formData.entries());

    const { name, number, selection, date, select } = formEntries;

    if (!name || !number || !selection || !date || !select) {
      setModalText("Please fill all fields.");
      setIsModalOpen(true);
      return;
    }

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: `Name: ${name}\nPhone: ${number}\nGuests: ${selection}\nCheck-in Date: ${date}\nDestination: ${select}`,
      });

      setModalText("Your reservation has been successfully submitted.");
      setIsModalOpen(true);
      (document.getElementById("myForm") as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setModalText("Failed to submit your reservation.");
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="mt-40 pt-10 flex flex-col items-center bg-[#F9F9F9] max-xl:mt-120">
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-10 rounded-xl shadow-xl w-1/3 relative max-xl:w-1/2 max-xl:p-8"
          >
            <button
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <p className="text-center text-lg max-xl:text-sm">{modalText}</p>
          </div>
        </div>
      )}
      <p className="text-4xl text-center font-semibold">
        {t("ReservationTitlePage")}
      </p>
      <form
        className="mt-15 container mx-auto"
        id="myForm"
        onSubmit={SendMessage}
      >
        <div className="flex justify-center gap-10 max-lg:flex-col ">
          <div className="flex flex-col w-full max-lg:w-full max-lg:px-5">
            <label
              htmlFor="name"
              className="text-lg font-semibold text-gray-400 mb-2"
            >
              Your Name
            </label>
            <input
              className="p-4 border border-gray-400 rounded-full text-lg max-sm:p-2"
              type="text"
              placeholder="Ex. John Smithee"
              id="name"
              name="name"
              required
            />
            <label
              htmlFor="number"
              className="text-lg font-semibold text-gray-400 mb-2 mt-5"
            >
              Your Phone Number
            </label>
            <input
              type="number"
              className="p-4 border border-gray-400 rounded-full text-lg max-sm:p-2"
              placeholder="Ex. +99897 006 96 56"
              id="number"
              name="number"
              required
            />
          </div>
          <div className="flex flex-col w-full max-lg:w-full max-lg:px-5">
            <label
              htmlFor="selection"
              className="text-lg font-semibold text-gray-400 mb-2"
            >
              Number Of Guests
            </label>
            <select
              id="selection"
              name="selection"
              className="p-4 border border-gray-400 rounded-full text-lg max-sm:p-2"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            <label
              htmlFor="date"
              className="text-lg font-semibold text-gray-400 mb-2 mt-5"
            >
              Check In Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="p-4 border border-gray-400 rounded-full text-lg max-sm:p-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col container mx-auto max-lg:w-full max-lg:px-5">
          <label
            htmlFor="select"
            className="text-lg font-semibold text-gray-400 mb-2 mt-5"
          >
            Choose Your Destination
          </label>
          <select
            id="select"
            name="select"
            className="p-4 border border-gray-400 rounded-full text-lg max-sm:p-2"
            required
          >
            <option>Antalya</option>
            <option>Istanbul</option>
            <option>Dubai</option>
            <option>Sharm-el Sheikh</option>
            <option>Kuala Lumpur</option>
            <option>Canada</option>
          </select>
          <label
            htmlFor="visa"
            className="text-lg font-semibold text-gray-400 mb-2 mt-5"
          >
            Choose Your Visa Support
          </label>
          <select
            id="visa"
            name="visa"
            className="p-4 border border-gray-400 rounded-full text-lg mb-8 max-sm:p-2"
            required
          >
            <option>USA</option>
            <option>Japan</option>
            <option>Canada</option>
            <option>Dubai</option>
            <option>Shenghen</option>
          </select>
          <Button text={t("ReservationButtonPage")} />
        </div>
      </form>
    </div>
  );
}
