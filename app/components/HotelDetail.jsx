import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Anchor from "./ui/Anchor";

function HotelDetail({
  img,
  name,
  address,
  website,
  today = [],
  promotions = [],
}) {
  return (
    <div className="text-center max-w-xl p-3 mb-8">
      <div>
        <div className="h-52 w-52 mb-6 mx-auto rounded-full overflow-hidden border border-gray-600 shadow-lg">
          <Image
            src={img}
            width={0}
            height={0}
            sizes="100%"
            className="h-full w-full object-cover"
            alt="Accommodation Image"
          />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold mb-2">{name}</h1>
        <p className="text-lg md:text-xl">{address}</p>
        <a
          href={website}
          className="text-blue-900 hover:text-blue-800 hover:underline text-lg"
        >
          {website}
        </a>
      </div>

      {today.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl md:text-2xl font-medium mb-3">Today</h2>
          {today.map(({ label, link }) => (
            <Anchor
              key={label}
              label={label}
              link={link}
              rightIcon={
                <ArrowRight
                  size={28}
                  className="absolute -translate-y-1/2 top-1/2 right-10 invisible group-hover:right-8 group-hover:visible duration-100 ease-out"
                />
              }
            />
          ))}
        </div>
      )}

      {promotions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-3">Promotions</h2>
          {promotions.map(({ label, link }) => (
            <Anchor
              key={label}
              label={label}
              link={link}
              rightIcon={
                <ArrowRight
                  size={28}
                  className="absolute -translate-y-1/2 top-1/2 right-10 invisible group-hover:right-8 group-hover:visible duration-100 ease-out"
                />
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelDetail;
