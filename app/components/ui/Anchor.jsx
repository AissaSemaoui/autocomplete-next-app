import Link from "next/link";
import React from "react";

function Anchor({ label, link, rightIcon }) {
  return (
    <Link
      href={link}
      className="group relative block mb-3 text-white text-base md:text-lg bg-green-500 hover:bg-green-600 active:bg-green-700 w-full py-2 rounded-full duration-75 shadow"
    >
      {label} {rightIcon}
    </Link>
  );
}

export default Anchor;
