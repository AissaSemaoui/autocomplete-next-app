import React from "react";
import { Location } from "../assets/icons/loaction";
import { ArrowUpLeft } from "../assets/icons/arrow-up-left";
import { Link } from "iconsax-react";

const LocationItem = ({ hit, components }) => {
  return (
    <Link
      href={hit.link}
      className="h-full w-full group flex items-center gap-4 p-2"
    >
      <div className="pl-2">
        <Location
          className="text-blue-900 group-hover:text-blue-700"
          size="24"
        />
      </div>
      <div
        className={`flex-1 flex flex-col justify-center font-metropolis font-medium`}
      >
        <h5 className="text-lg text-blue-950 group-hover:text-blue-700">
          <components.Highlight hit={hit} attribute="title" />
        </h5>
        <span className="text-md text-gray-400">
          <components.Highlight hit={hit} attribute="location" />
        </span>
      </div>
      <div>
        <ArrowUpLeft className="text-gray-400" />
      </div>
    </Link>
  );
};

export default LocationItem;
