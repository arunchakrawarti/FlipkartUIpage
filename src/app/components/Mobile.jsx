"use client";
import React, { useRef } from "react";

const Mobile = () => {
  const scrollRef = useRef(null);

  const items = [
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/mobile/b/p/t/-original-imahegqhrtpsz7sd.jpeg?q=60", title: "Google Pixel 9", price: "From ₹62999" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/mobile/g/e/o/-original-imahf42u4vuy5czh.jpeg?q=60", title: "Samsung Galaxy S25...", price: "Just ₹68999" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/mobile/e/l/m/-original-imahcfcfhxrf5hzg.jpeg?q=60", title: "Nothing Phone (3a)", price: "From ₹22999" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/mobile/6/9/t/-original-imahfkvfhpfaftmb.jpeg?q=60", title: "Vivo T4 Lite 5G", price: "From ₹9999" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/mobile/d/o/q/-original-imahdde7qcfymps9.jpeg?q=60", title: "Oppo K13x 5G", price: "Just ₹10,749" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=60", title: "Realme P3x 5G", price: "Just ₹12,499" },
    { img: "https://rukminim1.flixcart.com/image/240/240/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=60", title: "Dry Fruits", price: "Upto 75% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=60", title: "Puzzles & Cubes", price: "From ₹79" },
  ];

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-white mt-2 mx-2 p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Mobiles</h1>

      {/* Mobile Grid (2x2) */}
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-2 text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-36 object-contain mb-2 transition-transform duration-300 hover:scale-110"
            />
            <p className="font-semibold">{item.title}</p>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="hidden sm:flex gap-4 overflow-x-scroll scroll-smooth relative"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow p-2 text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-[150px] h-[150px] mx-auto object-contain transform transition-transform duration-300 hover:scale-110"
            />
            <p className="font-semibold mt-2">{item.title}</p>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Scroll Buttons for Desktop/Tablet */}
      <button
        onClick={handleScrollLeft}
        className="hidden sm:flex absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 text-black px-3 py-2 rounded-full shadow-lg"
      >
        ◀
      </button>
      <button
        onClick={handleScrollRight}
        className="hidden sm:flex absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 text-black px-3 py-2 rounded-full shadow-lg"
      >
        ▶
      </button>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Mobile;




