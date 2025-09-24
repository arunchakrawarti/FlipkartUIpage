"use client";
import React, { useRef, useState, useEffect } from "react";

const Photo1 = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(7);

  const items = [
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/shoe/m/l/m/-original-imahddyzhk9mqnw6.jpeg?q=60", title: "PUMA ADIDAS...", discount: "Min 60% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=60", title: "Soft Toye", discount: "Upto 70% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=60", title: "Best of Action Toys", discount: "Upto 70% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=60", title: "Geared Cycle", discount: "Upto 70% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/outdoor-toy/w/d/w/-original-imah44c7dzgzndhu.jpeg?q=60", title: "Toys and Games", discount: "Upto 80% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=60", title: "Remote Control Toys", discount: "Upto 80% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=60", title: "Coffee Powder", discount: "Upto 80% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=60", title: "Top Selling Stationery", discount: "From 49" }
  ];

  const gap = 16;

  // Responsive visibleCount set karna
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4); // Tablet
      } else {
        setVisibleCount(7); // Laptop/Desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / visibleCount;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / visibleCount;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(prev => Math.min(prev + 1, items.length - visibleCount));
    }
  };

  return (
    <div className="relative mx-2 mt-2 p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Tyoohar Trends</h1>
      
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full shadow-lg z-10 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        ◀
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        disabled={currentIndex === items.length - visibleCount}
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full shadow-lg z-10 ${currentIndex === items.length - visibleCount ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        ▶
      </button>

      {/* Items */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden scroll-smooth"
        style={{ gap: `${gap}px` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-center cursor-pointer"
            style={{ width: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})` }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[160px] w-full object-cover mb-2 transition-transform duration-300 hover:scale-110"
            />
            <p className="font-medium">{item.title}</p>
            <p className="text-sm font-semibold">{item.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo1;





