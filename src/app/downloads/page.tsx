"use client";
import React from "react";
import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import { CircleArrowDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function DownloadsPage() {
  const router = useRouter();
  const handleClick = async () => {
    // Chuyển trang và chờ quá trình chuyển hoàn tất
    await router.push("/docs/user-win-download");
  };
  return (
    <main className="mt-[3rem] w-full">
      <div className="flex w-full flex-col items-center justify-center gap-[1rem]">
        <p className="text-center text-4xl font-bold">Download Flora </p>
        <p className="w-[45rem] text-center text-xl text-[#a1a1a1]">
          Experience the best music streaming service on your favorite device.
          Download our app now and enjoy unlimited access to millions of songs.
        </p>
      </div>
      <div className="mt-[5rem] grid grid-cols-1 justify-items-center gap-[2rem]">
        <div
          className="flex h-[250px] w-[880px] flex-col items-center justify-center gap-[2rem] rounded-lg border px-[2rem]"
          style={{ background: "black" }}
        >
          <div className="flex w-full items-center gap-[2rem] px-[1rem]">
            <Image
              src={"/windows11.svg"}
              width={"100"}
              height={"100"}
              alt="windows-11-logo"
              className="dark:invert-[1]"
            ></Image>
            <div className="flex h-[6rem] flex-col items-center justify-center border-r pr-[2rem]">
              <p className="text-xl">Windows</p>
              <p className="text-sm">Windows 11 , 10</p>
            </div>
            <div>
              <p className="text-xl">User Install</p>
              <p className="text-sm hover:underline">x64 Arm64</p>
            </div>
            <div>
              <p className="text-xl">System Install</p>
              <p className="text-sm hover:underline">x64 Arm64</p>
            </div>
            <div>
              <p className="text-xl">.zip</p>
              <p className="text-sm hover:underline">x64 Arm64</p>
            </div>
            <div>
              <p className="text-xl">CLI</p>
              <p className="text-sm hover:underline">x64 Arm64</p>
            </div>
          </div>
          <a className="w-full" href="/downloads">
            <div className="flex w-full items-center justify-center gap-[0.5rem] rounded-md border bg-white px-3 py-2 dark:bg-black">
              <CircleArrowDown className="text-black dark:text-white" />
              <p className="text-black dark:text-white">Download for Windows</p>
            </div>
          </a>
        </div>
        <div
          className="flex h-[250px] w-[880px] flex-col items-center justify-center gap-[2rem] rounded-lg border px-[2rem]"
          style={{ background: "black" }}
        >
          <div className="flex w-full items-center gap-[2rem] px-[1rem]">
            <Image
              alt="windows-11-logo"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="dark:invert-[1]"
              src="/linux.svg"
              style={{ color: "transparent" }}
            />
            <div>
              <p className="text-2xl">Linux</p>
              <p>Debian, Ubuntu</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-[0.5rem] rounded-md border bg-white px-3 py-2 dark:bg-black">
            <CircleArrowDown className="text-black dark:text-white" />
            <p className="text-black dark:text-white">Download for Linux</p>
          </div>
        </div>
        <div
          className="flex h-[250px] w-[880px] flex-col items-center justify-center gap-[2rem] rounded-lg border px-[2rem]"
          style={{ background: "black" }}
        >
          <div className="flex w-full items-center gap-[2rem] px-[1rem]">
            <Image
              src={"/apple.svg"}
              width={"100"}
              height={"100"}
              alt="windows-11-logo"
              className="dark:invert-[1]"
            ></Image>
            <div>
              <p className="text-2xl">Mac Os</p>
              <p>MacOs 10.15+</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-[0.5rem] rounded-md border bg-white px-3 py-2 dark:bg-black">
            <CircleArrowDown className="text-black dark:text-white" />
            <p className="text-black dark:text-white">Download for MacOs</p>
          </div>
        </div>
      </div>

      <section className="w-full md:py-24 lg:py-32 xl:py-[5.4rem]">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="mt-[3rem]">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="mt-[2rem] text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Choose the Music App?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Music App offers a seamless and personalized music listening
                experience with a range of features to enhance your enjoyment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Offline Listening</h3>
              <p className="text-sm text-muted-foreground">
                Download your favorite songs and playlists to listen offline,
                anytime, anywhere.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">
                Personalized Recommendations
              </h3>
              <p className="text-sm text-muted-foreground">
                Get tailored music recommendations based on your listening
                history and preferences.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">High-Quality Audio</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy your music in high-quality audio, delivering a immersive
                listening experience.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Seamless Sync</h3>
              <p className="text-sm text-muted-foreground">
                Sync your music library across all your devices for
                uninterrupted listening.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Curated Playlists</h3>
              <p className="text-sm text-muted-foreground">
                Discover new music with expertly curated playlists tailored to
                your taste.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Intuitive Interface</h3>
              <p className="text-sm text-muted-foreground">
                Navigate your music library with ease using the user-friendly
                and intuitive app interface.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Download
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
