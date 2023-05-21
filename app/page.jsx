"use client";

import Image from "next/image";
import MainSearchBox from "./components/MainSearchBox";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col bg-green- justify-center items-center gap-2 p-4 md:p-12 lg:p-24 bg-gradient">
      <Image
        src="./next.svg"
        width={150}
        height={150}
        className="mb-10"
      ></Image>
      <div className="max-w-2xl w-full">
        <h1 className="text-2xl text-center sm:text-3xl md:text-4xl text-white font-[900] mb-2">
          What are you looking for!
        </h1>
        <h2 className="text-lg md:text-xl text-white font">
          Better for you, Good for us, Better for accommodations...
        </h2>
      </div>
      <MainSearchBox className=" w-full max-w-2xl  mb-72" />
    </main>
  );
}
