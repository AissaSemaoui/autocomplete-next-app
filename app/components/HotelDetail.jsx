import Image from "next/image";
import Link from "next/link";
import React from "react";

function HotelDetail({
  img,
  name,
  address,
  website,
  today = [],
  promotions = [],
}) {
  return (
    <div className="text-center max-w-xl p-1 mb-8">
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
        <h1 className="text-2xl font-semibold mb-2">{name}</h1>
        <p className="text-xl">{address}</p>
        <a href={website} className="text-blue-900 text-lg">
          {website}
        </a>
      </div>

      {today.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-3">Today</h2>
          {today.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              className="block mb-2 text-white text-2xl bg-green-600 hover:bg-green-700 active:bg-green-800 w-full py-3 rounded-full duration-75 shadow-sm"
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      {promotions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-3">Promotions</h2>
          {promotions.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              className="block mb-2 text-white text-2xl bg-green-600 hover:bg-green-700 active:bg-green-800 w-full py-3 rounded-full duration-75 shadow-sm"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelDetail;
