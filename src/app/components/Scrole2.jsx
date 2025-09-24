"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Scrole2 = () => {
  const scrollRef = useRef(null);

  const products = [
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/water-geyser/m/9/7/-original-imahd77j8jh7hmge.jpeg?q=60", title: "Fan & Geyser", price: "From ₹999" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/water-purifier/a/u/x/-original-imahdt5pq9bzzstb.jpeg?q=60", title: "Home Essentials", price: "From ₹1399" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/projector/8/v/g/i9-pro-10-ei9027-led-projector-egate-original-imah5f7xgdsqhb9d.jpeg?q=60", title: "Projector", price: "From ₹6990" },
    { img: "https://rukminim1.flixcart.com/image/240/240/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60", title: "Best Selling Mobiles...", price: "From ₹499" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/monitor/3/y/r/b277-d6-full-hd-27-2025-um-hb7si-601-acer-original-imahef7gpxnc7t3m.jpeg?q=60", title: "Monitor", price: "From ₹6599" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60", title: "Fasttrak SmartWatch", price: "From ₹1399" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=60", title: "Printer", price: "From ₹2599" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/monitor/c/3/u/-original-imah9hc6zk6wkjcz.jpeg?q=60", title: "Monitor", price: "From ₹7949" },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative mx-2 mt-4 p-4 bg-white rounded-lg shadow">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-3">
        Top Deals
      </h1>

      {/* 👇 Mobile: grid layout (2x2), Laptop: horizontal scroll */}
      <div
        ref={scrollRef}
        className="
          grid grid-cols-2 gap-4
          md:flex md:gap-4 md:overflow-x-hidden
        "
      >
        {products.map((item, i) => (
          <div
            key={i}
            className="
              text-center flex-shrink-0 
              w-full md:w-[200px] lg:w-[240px]
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] w-full object-contain mb-2 transition-transform duration-300 hover:scale-110"
            />
            <p className="text-xs sm:text-sm md:text-base mb-1">{item.title}</p>
            <p className="font-bold text-sm sm:text-base">{item.price}</p>
          </div>
        ))}

        {/* Last Banner */}
        <div className="col-span-2 md:flex-shrink-0 w-full md:w-[350px] lg:w-[400px] h-[180px] sm:h-[220px] md:h-[260px] flex justify-center items-center">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1060/1620/image/ce3cf81edb760559.jpg?q=60"
            alt="Last Banner"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Scroll Buttons सिर्फ़ Desktop पर */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Scrole2;
