"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import { usePathname } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "../../../../config/site";
import Link from "next/link";
export default function DocsSideBar() {
  const pathname = usePathname();
  return (
    <div className="sticky h-[600px]  w-[320px] mr-[1rem]  top-[5.6rem]">
      <ScrollArea className=" h-[560px]  w-[320px] ">
        <div className="flex gap-[1rem]  sticky top-[1rem]  h-[600px]    flex-col">
          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="font-medium">Introduction</h1>
            <div className="flex flex-col gap-2">
              <Link
                className={`text-sm ${
                  pathname === "/docs" ? "text-white" : "text-[#a1a1a1]"
                }`}
                href="/docs"
              >
                Purpose of the Software
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/key-features"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/key-features"
              >
                Key Features
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/versions-and-updates"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/versions-and-updates"
              >
                Versions and Updates
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="font-medium">System Requirements</h1>
            <div className="flex flex-col gap-2">
              <Link
                className={`text-sm ${
                  pathname === "/docs/minimum-hardware-specifications"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/minimum-hardware-specifications"
              >
                Minimum Hardware Specifications
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/necessary-software-requirements"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/necessary-software-requirements"
              >
                Necessary Software Requirements
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/operating-system-compatibility"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/operating-system-compatibility"
              >
                Operating System Compatibility
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="font-medium">Installation</h1>
            <div className="flex flex-col gap-2">
              <Link
                className={`text-sm ${
                  pathname === "/docs/downloading-the-software"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/downloading-the-software"
              >
                Downloading the Software
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/installation-on-windows"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/installation-on-windows"
              >
                Installation on Windows
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/installation-on-linux"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/installation-on-linux"
              >
                Installation on Linux
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/installation-on-macos"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/installation-on-macos"
              >
                Installation on macOS
              </Link>
              <Link
                className={`text-sm ${
                  pathname === "/docs/upgrading-and-uninstalling-the-software"
                    ? "text-white"
                    : "text-[#a1a1a1]"
                }`}
                href="/docs/upgrading-and-uninstalling-the-software"
              >
                Upgrading and Uninstalling the Software
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="font-medium">Configuration</h1>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#a1a1a1]">Initial Setup</p>
              <p className="text-sm text-[#a1a1a1]">User Interface Options</p>
              <p className="text-sm text-[#a1a1a1]">
                Audio and Output Settings
              </p>
              <p className="text-sm text-[#a1a1a1]">
                Effect Processor Configuration
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
