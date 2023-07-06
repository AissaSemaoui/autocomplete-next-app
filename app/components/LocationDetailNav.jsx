"use client";

import React, { useRef, useState } from "react";
import { ArrowLeft, SearchNormal1 } from "iconsax-react";
import Link from "next/link";
import MainSearchBox from "../components/MainSearchBox";

const LocationDetailNav = () => {
  const [searchAPI, setSearchAPI] = useState(null);

  const options = useRef({
    openOnFocus: true,
    detachedMediaQuery: "",
  });

  const openDetachedSearch = () => {
    searchAPI.setIsOpen(true);
  };

  return (
    <>
      <MainSearchBox
        className="searchbox--detached"
        options={options.current}
        setSearchAPI={setSearchAPI}
      />
      <div className="flex justify-between w-full mb-2 pt-6 px-2 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 p-2 hover:outline outline-1 outline-gray-300 active:outline-gray-400 rounded-full duration-75"
        >
          <ArrowLeft />
          Back Home
        </Link>
        <button
          onClick={openDetachedSearch}
          className="flex items-center gap-2 p-2 hover:outline outline-1 outline-gray-300 active:outline-gray-400 rounded-full duration-75"
        >
          <SearchNormal1 />
        </button>
      </div>
    </>
  );
};

export default LocationDetailNav;
