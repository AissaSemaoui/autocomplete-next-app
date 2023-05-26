"use client";

import Image from "next/image";
import MainSearchBox from "./components/MainSearchBox";
import { Linktree } from "./assets/linktree";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="p-8">
        <Image
          src="./next.svg"
          height={0}
          width={0}
          className="object-contain w-16 md:w-24"
        ></Image>
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
        <MainSearchBox className=" w-full max-w-2xl mb-2" />
        <Link href="learn-more" className="text-xs hover:underline text-white">
          learn more
        </Link>
      </div>
      <a
        href="https://linktr.ee/"
        target="_blank"
        className="w-max p-1 m-2 text-center rounded-md bg-white shadow-md hover:shadow active:shadow-none cursor-pointer"
      >
        <Linktree className="w-6 md:h-8 h-6 md:w-8 mx-auto" />
        <h4 className="hidden md:block text-xs">Linktree</h4>
      </a>
    </main>
  );
}
