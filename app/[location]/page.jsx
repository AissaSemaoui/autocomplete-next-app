import React from "react";
import HotelDetail from "../components/HotelDetail";
import LocationDetailNav from "../components/LocationDetailNav";

function SearchId({ params }) {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <LocationDetailNav />
      <div className="w-full flex justify-center flex-1 h-full">
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
