import React from "react";
import HotelDetail from "../components/HotelDetail";
import { ArrowLeft, SearchNormal1 } from "iconsax-react";
import Link from "next/link";

function SearchId({ params }) {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="flex justify-between w-full pt-6 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 p-2 hover:outline outline-1 outline-gray-300 active:outline-gray-400 rounded-full duration-75"
        >
          <ArrowLeft />
          Back Home
        </Link>
        <button className="flex items-center gap-2 p-2 hover:outline outline-1 outline-gray-300 active:outline-gray-400 rounded-full duration-75">
          Search <SearchNormal1 />
        </button>
      </div>
      <div className="w-full flex items-center justify-center flex-1 h-full">
        <HotelDetail
          img="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          name={params.location}
          address="Hotel Centara Anda Dhevi, 31, Ao Nang, Krabi"
          website="https://www.hotelsleepwell.com/"
          today={[
            {
              label: "Double room 50% off",
              link: "https://www.hotelsleepwell.com/",
            },
            {
              label: "Family room 30% off",
              link: "https://www.hotelsleepwell.com/",
            },
          ]}
          promotions={[
            {
              label: "Get 5% discount",
              link: "https://www.hotelsleepwell.com/",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default SearchId;
