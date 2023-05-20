"use client";

import MainSearchBox from "./components/MainSearchBox";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col bg-green- justify-center items-center gap-8 p-24 bg-gradient">
      <h1 className="text-5xl text-center text-white font-[900]">
        What are you looking for!
      </h1>
      <MainSearchBox className="mb-72 w-full max-w-2xl" />
    </main>
  );
}
