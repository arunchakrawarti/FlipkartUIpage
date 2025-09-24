"use client";
import React from "react";

const Scrole3 = () => {
  const fashionItems = [
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/smartwatch/p/f/x/43-t10-ultra2-large-diaplay-2-19-blutooth-calling-smartwatch-original-imahyzdk3vwev6br.jpeg?q=60",
      title: "Wrist Watches",
      offer: "Min. 90% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/backpack/k/a/m/-original-imahfsk9buhfggyg.jpeg?q=60",
      title: "Laptop Bags",
      offer: "Min. 70% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/wallet-card-wallet/r/l/u/credit-debit-card-holder-1-8-men-women-card-holder-9-card-holder-original-imah8hczzzze4ze6.jpeg?q=60",
      title: "Wallets",
      offer: "Min. 70% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/t-shirt/l/1/q/xl-ts124-vebnor-original-imaheqscmf6augkw.jpeg?q=60",
      title: "Men's T-shirts",
      offer: "In Focus Now",
    },
  ];

  const homeItems = [
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/collapsible-wardrobe/j/h/c/280-hdf-1300-1-5-eem-3-door-firozi-eemway-sky-blue-168-original-imahek4fzwcbzdta.jpeg?q=60",
      title: "Collapsible Wardrobes",
      offer: "Min. 50% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/shoe-rack/c/1/a/premium-6-tiers-shoe-rack-everstep-black-original-imagqffegbqnpgrg.jpeg?q=60",
      title: "Shoe Rack",
      offer: "Min. 50% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/shopsy-fruit-vegetable-basket/g/q/n/vm-4xl-new-trolley-vm-bond-original-imahddwqvjub664h.jpeg?q=60",
      title: "Kitchen Trolleys",
      offer: "Min. 50% Off",
    },
    {
      img: "https://rukminim1.flixcart.com/image/420/420/xif0q/bouncer/j/b/c/cotton-swing-for-kids-baby-s-children-folding-and-washable-1-original-imagh8evru6wsd5j.jpeg?q=60",
      title: "Hammock Swings",
      offer: "Min. 50% Off",
    },
  ];

  const Card = ({ img, title, offer }) => (
    <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition bg-white">
      <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <p className="mt-2 font-medium text-center text-sm sm:text-base">
        {title}
      </p>
      <p className="text-green-600 font-semibold text-center text-xs sm:text-sm">
        {offer}
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
      {/* Left side (Fashion + Home) */}
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fashion */}
        <div>
          <h2 className="text-base sm:text-lg font-bold mb-3">
            Best Value Deals on Fashion
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {fashionItems.map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </div>
        </div>

        {/* Home */}
        <div>
          <h2 className="text-base sm:text-lg font-bold mb-3">
            Make your home stylish
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {homeItems.map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Banner */}
      <div
        className="lg:col-span-4 rounded-lg h-48 sm:h-64 md:h-80 lg:h-auto"
        style={{
          backgroundImage:
            "url('https://rukminim1.flixcart.com/www/1060/1460/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Scrole3;






