"use client";

import Image from "next/image";
import MainSearchBox from "./components/MainSearchBox";

export default function Home() {
  return (
    <main>
      <div className="p-8">
        <Image
          src="./next.svg"
          height={0}
          width={0}
          className="object-contain w-16 md:w-24"
        ></Image>
      </div>
      <div className="flex w-full h-full flex-col justify-center items-center gap-2 mx-auto p-4 md:py-12 lg:py-24 bg-gradient mt-[10vh]">
        <div className="max-w-3xl w-full">
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl text-white font-[900] font-poppins mb-2">
            Good for us. Better for accommodations.
          </h1>
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl text-white font-[900] font-poppins mb-6">
            Best for you.
          </h1>
        </div>
        <MainSearchBox className=" w-full max-w-2xl" />
      </div>
    </main>
  );
}
