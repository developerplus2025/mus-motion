import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center mt-[3rem]">
      <div className=" w-[900px] gap-[2rem] h-[400px] flex flex-col items-center justify-center rounded-lg">
        <p className="text-3xl"> Oops, page not found!</p>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-[1rem]">
          <Link
            href="/"
            className="dark:bg-white px-3 py-1 rounded-md bg-black text-white  dark:text-black"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="dark:bg-white px-3 py-1 rounded-md bg-black text-white  dark:text-black"
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="dark:bg-white px-3 py-1 rounded-md bg-black text-white  dark:text-black"
          >
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
