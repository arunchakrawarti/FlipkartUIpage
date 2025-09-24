"use client";
import React, { useRef, useState, useEffect } from "react";

const Top = () => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const items = [
    { img: "https://rukminim1.flixcart.com/image/240/240/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=60", title: "U.S. Polo Assn.High..", offer: "Min.40% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/wall-clock/e/n/d/wall-clock-for-home-decore-28-wallclock-1-ga-analog-gulabi-art-original-imah2xxdydfj9suz.jpeg?q=60", title: "Wall Clock", offer: "From 149" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/umbrella/l/o/y/39-4-1pc-auto-8-ribs-umbrella-for-sun-rain-protection-man-woman-original-imahycxchaycxsrz.jpeg?q=60", title: "Umbrellas", offer: "Up to 85% Off" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/casserole/o/o/i/3-cthfftk202grey0001-milton-original-imagg9k8fnrpdgcu.jpeg?q=60", title: "Casseroles", offer: "From 299" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/wall-decoration/3/2/n/wallart-004-1-pr-101-wall-hanging-adfusion-original-imahfms2uqafmvgx.jpeg?q=60", title: "Wall Decoratives", offer: "From 99" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/lunch-box/m/s/y/1500-rectangular-classy-3-section-lunch-box-with-1-spoon-1-fork-original-imagz2ncvgfeg5xv.jpeg?q=60", title: "Lunch Boxes", offer: "From 129" },
    { img: "https://rukminim1.flixcart.com/image/240/240/xif0q/chopper/a/k/i/3-stainless-steel-blade-powerful-mini-handy-quick-450-ml-chopper-original-imagkw7m99qemaqm.jpeg?q=60", title: "Choppers", offer: "From 99" },
    { img: "https://rukminim1.flixcart.com/image/240/240/kg9qbgw0/mosquito-net/8/e/h/polyester-adults-pop-up-foldable-double-bed-king-size-mosquito-original-imafwjf9gwdzfw8n.jpeg?q=60", title: "Mosquito Nets", offer: "From 249" },
  ];

  const [visibleItems, setVisibleItems] = useState(2); // default mobile
  const itemWidth = 180;

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) setVisibleItems(4);
      else if (window.innerWidth >= 640) setVisibleItems(3);
      else setVisibleItems(2);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const handleScroll = (direction) => {
    let newIndex = index + (direction === "right" ? 1 : -1);
    if (newIndex < 0) newIndex = 0;
    if (newIndex > items.length - visibleItems) newIndex = items.length - visibleItems;
    setIndex(newIndex);

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${newIndex * itemWidth}px)`;
    }
  };

  return (
    <div className="relative bg-white mt-10 mx-2 px-2 py-6 rounded-lg shadow-md">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Top Deals on Home Essentials</h1>

      {/* Mobile Grid */}
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-2 text-center">
            <img src={item.img} alt={item.title} className="w-full h-36 object-contain rounded-md" />
            <p className="mt-2 text-sm font-medium">{item.title}</p>
            <p className="text-gray-600 text-sm">{item.offer}</p>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Carousel */}
      <div className="hidden sm:block overflow-hidden relative">
        <div ref={scrollRef} className="flex gap-4 sm:gap-6 transition-transform duration-500">
          {items.map((item, i) => (
            <div key={i} className={`flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] text-center`}>
              <img src={item.img} alt={item.title} className="w-full h-[160px] md:h-[180px] object-contain rounded-md transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105" />
              <p className="mt-2 text-sm md:text-base font-medium">{item.title}</p>
              <p className="text-gray-600 text-sm md:text-base">{item.offer}</p>
            </div>
          ))}
        </div>

        {/* Left/Right Buttons */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200 text-black px-2 py-2 rounded-full shadow hover:bg-gray-300"
        >
          ◀
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200 text-black px-2 py-2 rounded-full shadow hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Top;
