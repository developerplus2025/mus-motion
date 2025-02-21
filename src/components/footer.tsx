"use client";
import { Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Mail, Github, Twitter, Music2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
export default function Footer() {
  const path = usePathname();
  const isWebApp = path === "/webapp";
  const isAi = path === "/ai";
  const isChatV2 = path === "/chat-v2";
  const isRadio = path === "/radio";
  const isSignIn = path === "/signin";
  const isDocs = path === "/docs";
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));
    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => {
        return `Thanks for subscribing!`;
      },
      error: 'Error',
    });
  };
  return (
    <div
      className={`${isWebApp || isAi || isChatV2 || isRadio || isSignIn || isDocs || path.startsWith("/docs") ? "webfilm-class" : ""} border-t py-4`}
    >
      <div className="">
        <div className="mb-10 grid grid-cols-1 gap-8 px-4 md:grid-cols-5">
          {/* Logo Column */}
          <div className="col-span-1">
            <div className="mb-3 flex items-center gap-2">
              {/* <Music2 className="h-5 w-5 text-white" /> */}
              <h3 className="text-lg font-semibold tracking-tight">
                Flora Software Company
              </h3>
            </div>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              {["Docs", "Learn", "Showcase", "Blog", "Analytics"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#a1a1a1] transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* More Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">More</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Music Store",
                "Contact Sales",
                "GitHub",
                "Releases",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#a1a1a1] transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">About MusicSoft</h4>
            <ul className="space-y-2 text-sm">
              {[
                "MusicSoft + AI",
                "Open Source Software",
                "GitHub",
                "Community",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#a1a1a1] transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold">
              Subscribe to our newsletter
            </h4>
            <p className="mb-3 text-xs text-[#a1a1a1]">
              Stay updated on new releases and features, guides, and case
              studies.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="you@domain.com"
                className="h-8  bg-[#27272a80] text-xs text-white placeholder:text-[#a1a1a1]"
                required
              />
              <Button
                type="submit"
                className="h-8 w-full bg-white text-xs text-black hover:bg-gray-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="w-full text-center text-sm text-[#a1a1a1]">
            © {new Date().getFullYear()} Flora Software Company, Inc.
          </p>
          <div className="hidden space-x-5">
            <a
              href="#"
              className="text-[#a1a1a1] transition-colors duration-200 hover:text-white"
              aria-label="GitHub"
            >
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <g clipPath="url(#clip0_872_3147)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_872_3147">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="#"
              className="text-[#a1a1a1] transition-colors duration-200 hover:text-white"
              aria-label="Twitter"
            >
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#a1a1a1] transition-colors duration-200 hover:text-white"
              aria-label="Email"
            >
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.57757 0 0 3.61682 0 8.03093C0 12.411 3.54999 16 7.9384 16C9.42621 16 10.8841 15.5819 12.1457 14.7934L12.3975 14.636L11.6025 13.364L11.3507 13.5214C10.3275 14.1609 9.14508 14.5 7.9384 14.5C4.38672 14.5 1.5 11.5909 1.5 8.03093C1.5 4.43692 4.4143 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8V8.60714C14.5 9.3764 13.8764 10 13.1071 10C12.2195 10 11.5 9.28046 11.5 8.39286V8V4.5H10V5.12734C9.43308 4.73191 8.74362 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5C9.05713 11.5 10.0048 11.0313 10.6466 10.2904C11.2148 11.0262 12.1056 11.5 13.1071 11.5C14.7048 11.5 16 10.2048 16 8.60714V8C16 3.58172 12.4183 0 8 0ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
