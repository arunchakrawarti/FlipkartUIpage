"use client";
import React, { useState, useEffect } from "react";

const Scrole = () => {
  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/a315509552eeaf53.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/59b4a42945833492.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/bb28e964e3ab3f7c.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/b480bd26b3ccc4e6.png?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/c52f71e3e399af41.jpeg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/8b6ca008fd2f7d2b.jpg?q=60",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full bg-gray-100 py-4">
     
      <div className="mx-2 overflow-hidden rounded-lg">
        
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-full">
              <img
                src={src}
                alt={`banner-${i}`}
                className="w-full h-[220px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

     
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md text-black px-3 py-4 rounded-md"
      >
        ←
      </button>

      
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md text-black px-3 py-4 rounded-md"
      >
        →
      </button>
    </div>
  );
};

export default Scrole;







