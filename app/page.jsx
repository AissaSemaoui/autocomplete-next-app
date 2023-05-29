"use client";

import Image from "next/image";
import MainSearchBox from "./components/MainSearchBox";
import { Linktree } from "./assets/icons/linktree";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="p-4 md:p-8 flex justify-between">
        <Image
          src="./next.svg"
          height={0}
          width={0}
          className="object-contain w-16 md:w-24"
        />
        <button className="px-4 py-1 ml-4 rounded-full text-white hover:bg-indigo-600/10 active:bg-indigo-800/20 active:scale-[98%] border-none">
          Accommodation owner
        </button>
      </div>
      <div className="flex flex-1 w-full h-full flex-col  items-center gap-2 mx-auto p-4 md:py-12 lg:py-24 bg-gradient mt-[10vh]">
        <div className="max-w-3xl w-full">
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl text-white font-[900] font-poppins mb-2">
            Good for us. Better for accommodations.
          </h1>
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl text-white font-[900] font-poppins mb-6">
            Best for you.
          </h1>
        </div>
        <MainSearchBox className="w-full max-w-2xl" />
        <Link
          href="learn-more"
          className="text-xs hover:underline text-white mt-2"
        >
          learn more
        </Link>
      </div>
      <a
        href="https://linktr.ee/"
        target="_blank"
        className="w-max p-1 mx-2 fixed left-0 -translate-y-[150%] sm:-translate-y-[120%]  top-full text-center rounded-md bg-white shadow-md hover:shadow active:shadow-none cursor-pointer"
      >
        <Linktree className="w-6 md:h-8 h-6 md:w-8 mx-auto" />
        <h4 className="hidden md:block text-xs">Linktree</h4>
      </a>
    </main>
  );
}
