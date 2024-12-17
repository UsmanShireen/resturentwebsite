"use client";

import React from "react";
import Image from "next/image";
import { PiMagnifyingGlassThin, PiArrowCircleRightBold } from "react-icons/pi";
import { useState } from "react";

const ShopMenu = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(2); // Default 2 stars filled
  const [price, setPrice] = useState(8000); // Default value for range slider

  return (
    <main className="w-full h-full flex justify-center items-center mt-32 mb-64">
      <div className="grid grid-cols-2 justify-center gap-5 pl-12">
        <div className="flex flex-col w-[880px] h-[1400px]">
          <div className="flex gap-5">
            <label htmlFor="" className="">
              Sort By:{" "}
              <select className="border border-gray-200 h-11 w-[200px] rounded-md">
                <option value="Newest" className="">
                  Newest
                </option>
              </select>
            </label>
            <label htmlFor="">
              Show:{" "}
              <select className="border border-gray-200 h-11 w-[200px] rounded-md">
                <option value="Newest" className="">
                  Default
                </option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-10">
            <div>
              <Image
                src={"/Shop1.png"}
                alt="Fresh Lime"
                width={500}
                height={500}
              ></Image>
              <p>Fresh Lime</p>
              <p className="text-[#FF9F0D]">
                $38.00 <del className="text-gray-400">$45.00</del>
              </p>
            </div>

            <div>
              <Image
                src={"/Shop2.png"}
                alt="Chocolate Muffin"
                width={500}
                height={500}
              ></Image>
              <p>Chocolate Muffin</p>
              <p className="text-[#FF9F0D]">$28.00</p>
            </div>

            <div>
              <Image
                src={"/Shop3.png"}
                alt="Burger"
                width={400}
                height={400}
              ></Image>
              <p>Burger</p>
              <p className="text-[#FF9F0D]">
                $21.00 <del className="text-gray-400">$45.00</del>
              </p>
            </div>

            <div>
              <Image
                src={"/Shop4.png"}
                alt="Country Burger"
                width={400}
                height={400}
              ></Image>
              <p>Country Burger</p>
              <p className="text-[#FF9F0D]">$45.00</p>
            </div>

            <div>
              <Image
                src={"/Shop5.png"}
                alt="Drink"
                width={400}
                height={400}
              ></Image>
              <p>Drink</p>
              <p className="text-[#FF9F0D]">
                $23.00 <del className="text-gray-400">$45.00</del>
              </p>
            </div>

            <div>
              <Image
                src={"/Shop6.png"}
                alt="Pizza"
                width={400}
                height={400}
              ></Image>
              <p>Pizza</p>
              <p className="text-[#FF9F0D]">$43.00</p>
            </div>

            <div>
              <Image
                src={"/Shop7.png"}
                alt="Cheese Butter"
                width={400}
                height={400}
              ></Image>
              <p>Cheese Butter</p>
              <p className="text-[#FF9F0D]">$10.00</p>
            </div>

            <div>
              <Image
                src={"/Shop8.png"}
                alt="Sandwiches"
                width={400}
                height={400}
              ></Image>
              <p>Sandwiches</p>
              <p className="text-[#FF9F0D]">$25.00</p>
            </div>

            <div>
              <Image
                src={"/Shop9.png"}
                alt="Chicken Chup"
                width={400}
                height={400}
              ></Image>
              <p>Chicken Chup</p>
              <p className="text-[#FF9F0D]">$12.00</p>
            </div>

            <div>
              <Image
                src={"/Shop10.png"}
                alt="Country Burger"
                width={400}
                height={400}
              ></Image>
              <p>Country Burger</p>
              <p className="text-[#FF9F0D]">$45.00</p>
            </div>

            <div>
              <Image
                src={"/Shop11.png"}
                alt="Drink"
                width={400}
                height={400}
              ></Image>
              <p>Drink</p>
              <p className="text-[#FF9F0D]">
                $23.00 <del className="text-gray-400">$45.00</del>
              </p>
            </div>

            <div>
              <Image
                src={"/Shop12.png"}
                alt="Pizza"
                width={400}
                height={400}
              ></Image>
              <p>Pizza</p>
              <p className="text-[#FF9F0D]">$43.00</p>
            </div>

            <div>
              <Image
                src={"/Shop13.png"}
                alt="Cheese Butter"
                width={400}
                height={400}
              ></Image>
              <p>Cheese Butter</p>
              <p className="text-[#FF9F0D]">$10.00</p>
            </div>

            <div>
              <Image
                src={"/Shop14.png"}
                alt="Fresh Lime"
                width={400}
                height={400}
              ></Image>
              <p>Sandwiches</p>
              <p className="text-[#FF9F0D]">$25.00</p>
            </div>

            <div>
              <Image
                src={"/Shop15.png"}
                alt="Chicken Chup"
                width={400}
                height={400}
              ></Image>
              <p>Chicken Chup</p>
              <p className="text-[#FF9F0D]">$12.00</p>
            </div>
          </div>
        </div>

        <div className="w-[312px] h-[1370px] border border-gray-300 mt-[84px] ml-[280px]">
          <div className="flex justify-center pt-6">
            <input
              type="text"
              placeholder="Search Product"
              className="h-11 bg-[#FF9F0D1A] w-[200px] pl-4"
            />
            <div className="bg-[#FF9F0D] h-11 w-10 flex justify-center items-center">
              <PiMagnifyingGlassThin className="text-white font-bold text-xl" />
            </div>
          </div>

          <div className="pt-6 pl-8">
            <p className="font-bold text-xl">Category</p>
            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Sandwiches
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Burger
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Chicken Chup
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Drink
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Pizza
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Thi
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Non Veg
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Uncategorized
              </label>
            </div>
          </div>

          <div className="relative h-[250px] w-[248px] ml-8 mt-6">
            <Image
              src="/Shopnow.png"
              alt="ShopNow"
              layout="fill"
              objectFit="cover"
              className=""
            />

            <div className="absolute">
              <h1 className="text-white text-xl pl-7 pt-8 font-bold">
                Perfect Taste
              </h1>
              <h1 className="text-white text-xl pl-7 pt-1 font-bold">
                Classic Restaurant
              </h1>
              <h1 className="text-[#FF9F0D] text-xl pl-7 pt-4 font-bold">
                45.00$
              </h1>
              <div className="absolute flex">
                <h1 className="text-white pt-16 pl-7">Shop Now</h1>
                <PiArrowCircleRightBold className="text-white text-xl mt-[68px] ml-3" />
              </div>
            </div>
          </div>

          <div className="p-4 max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-2">Filter By Price</h2>
            {/* Range Slider */}
            <input
              type="range"
              min="0"
              max="8000"
              value={price}
              onChange={(e: any) => setPrice(e.target.value)}
              className="w-full h-2 bg-orange-400 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <span>From $0 to $8000</span>
              <span>Filter</span>
            </div>
            {/* Price Display */}
          </div>

          <div>
            <h1 className="font-bold text-xl ml-4">Latest Products</h1>
            <div className="flex">
              <img src="Vector.png" alt="Pizza" className="pl-4 pt-4 h-20" />
              <div>
                <h1 className="pt-3 pl-4 text-md">Pizza</h1>
                <div className="flex pl-4">
                  {Array.from({ length: totalStars }, (_, index) => (
                    <span
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className={`cursor-pointer text-xl ${
                        index < rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h1 className="pl-4">$35.00</h1>
              </div>
            </div>

            <div className="flex">
              <img src="Vector.png" alt="Pizza" className="pl-4 pt-6" />
              <div>
                <h1 className="pt-3 pl-4 text-md">Pizza</h1>
                <div className="flex pl-4">
                  {Array.from({ length: totalStars }, (_, index) => (
                    <span
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className={`cursor-pointer text-xl ${
                        index < rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h1 className="pl-4">$35.00</h1>
              </div>
            </div>

            <div className="flex">
              <img src="Vector.png" alt="Pizza" className="pl-4 pt-6" />
              <div>
                <h1 className="pt-3 pl-4 text-md">Pizza</h1>
                <div className="flex pl-4">
                  {Array.from({ length: totalStars }, (_, index) => (
                    <span
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className={`cursor-pointer text-xl ${
                        index < rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h1 className="pl-4">$35.00</h1>
              </div>
            </div>

            <div className="flex">
              <img src="Vector.png" alt="Pizza" className="pl-4 pt-6" />
              <div>
                <h1 className="pt-3 pl-4 text-md">Pizza</h1>
                <div className="flex pl-4">
                  {Array.from({ length: totalStars }, (_, index) => (
                    <span
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className={`cursor-pointer text-xl ${
                        index < rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h1 className="pl-4">$35.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopMenu;
