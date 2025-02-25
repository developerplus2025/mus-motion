"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Spinner } from "@radix-ui/themes";

export default function SignInPage() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [namevalue, setNameValue] = useState(false);
  const showpassword = () => {
    setShow(!show);
  };
  // const refreshData = (e: React.MouseEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement; // Ép kiểu e.target thành HTMLInputElement
  //   target.value = ""; // Làm trống giá trị của input
  // };

  const refreshData = () => {
    const inputElement = document.getElementById("email") as HTMLInputElement;
    if (inputElement) {
      inputElement.value = ""; // Đặt giá trị về rỗng
    }
  };
  const logincheck = () => {
    setLogin(!login);
    const timer = setTimeout(() => {
      setLogin(false);
    }, 3000);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto w-[29rem] max-w-[29rem] dark:bg-black">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input id="email" type="email" placeholder="m@example.com" />
                <div
                  onClick={refreshData}
                  className="absolute right-[1rem] top-1/2 -translate-y-1/2 cursor-pointer"
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
                      d="M8.00002 1.25C5.33749 1.25 3.02334 2.73677 1.84047 4.92183L1.48342 5.58138L2.80253 6.29548L3.15958 5.63592C4.09084 3.91566 5.90986 2.75 8.00002 2.75C10.4897 2.75 12.5941 4.40488 13.2713 6.67462H11.8243H11.0743V8.17462H11.8243H15.2489C15.6631 8.17462 15.9989 7.83883 15.9989 7.42462V4V3.25H14.4989V4V5.64468C13.4653 3.06882 10.9456 1.25 8.00002 1.25ZM1.50122 10.8555V12.5V13.25H0.0012207V12.5V9.07538C0.0012207 8.66117 0.337007 8.32538 0.751221 8.32538H4.17584H4.92584V9.82538H4.17584H2.72876C3.40596 12.0951 5.51032 13.75 8.00002 13.75C10.0799 13.75 11.8912 12.5958 12.8266 10.8895L13.1871 10.2318L14.5025 10.9529L14.142 11.6105C12.9539 13.7779 10.6494 15.25 8.00002 15.25C5.05453 15.25 2.53485 13.4313 1.50122 10.8555Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={show ? "text" : "password"}
                  required
                />
                <div
                  className="absolute right-[1rem] top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={showpassword}
                >
                  {show && (
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
                        d="M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {!show && (
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
                        d="M0.191137 2.06228L0.751694 2.56055L14.2517 14.5605L14.8122 15.0588L15.8088 13.9377L15.2482 13.4394L13.4399 11.832L16.3183 8.48938V7.51059L13.1149 3.79053C10.6442 0.921301 6.36413 0.684726 3.59378 3.07992L1.74824 1.43943L1.18768 0.941162L0.191137 2.06228ZM14.7602 7.99998L12.3187 10.8354L10.6699 9.36978C11.249 8.24171 11.0661 6.82347 10.1213 5.87865C9.08954 4.8469 7.49326 4.72376 6.32676 5.50923L4.72751 4.08767C6.88288 2.36327 10.1023 2.59076 11.9783 4.76931L14.7602 7.99998ZM7.52702 6.57613L9.46929 8.30259C9.56713 7.82531 9.43091 7.30959 9.06063 6.93931C8.64578 6.52446 8.0484 6.4034 7.52702 6.57613ZM-0.318359 7.51059L1.40386 5.5106L2.54051 6.48938L1.23971 7.99998L4.02168 11.2307C5.52853 12.9805 7.90301 13.4734 9.89972 12.7017L10.4405 14.1008C7.88008 15.0904 4.82516 14.4625 2.88503 12.2094L-0.318359 8.48938V7.51059Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className={`${login ? "pointer-events-none" : "pointer-events-auto"} w-full select-none`}
              onClick={logincheck}
            >
              <Spinner
                size="1"
                className={`${login ? "block" : "hidden"} radix-themes`}
              />
              <p className={!login ? "block" : "hidden"}>Login</p>
            </Button>
            <div className="relative my-4 w-full border-t">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black">
                <span className="text-sm text-[#a1a1a1]">Or</span>
              </div>
            </div>
            <Button
              variant="outline"
              className={`${login ? "pointer-events-none" : "pointer-events-auto"} w-full select-none`}
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
              Login with GitHub
            </Button>
            <Button
              variant="outline"
              className={`${login ? "pointer-events-none" : "pointer-events-auto"} w-full select-none`}
            >
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <g clipPath="url(#clip0_872_3176)">
                  <path
                    d="M15.5274 6.68664L15.5055 6.63069L13.3858 1.0989C13.3427 0.990478 13.2663 0.898505 13.1677 0.836175C13.069 0.774904 12.9539 0.745394 12.8379 0.751629C12.7219 0.757865 12.6106 0.799545 12.519 0.871043C12.4285 0.944593 12.3628 1.04426 12.3309 1.15647L10.8997 5.53519H5.10437L3.67318 1.15647C3.64214 1.04365 3.57631 0.943483 3.48506 0.870232C3.39349 0.798734 3.28219 0.757054 3.16619 0.750818C3.05018 0.744583 2.93506 0.774093 2.83636 0.835364C2.73794 0.897946 2.66164 0.989838 2.61823 1.09809L0.494551 6.62744L0.473468 6.68339C0.168338 7.48065 0.130675 8.3555 0.366157 9.17603C0.601639 9.99656 1.0975 10.7183 1.77898 11.2324L1.78627 11.2381L1.80574 11.2519L5.03464 13.6699L6.63206 14.8789L7.60511 15.6136C7.71893 15.7 7.85791 15.7468 8.00082 15.7468C8.14373 15.7468 8.28271 15.7 8.39652 15.6136L9.36957 14.8789L10.967 13.6699L14.2154 11.2373L14.2235 11.2308C14.9034 10.7166 15.3981 9.99558 15.6332 9.17616C15.8684 8.35673 15.8312 7.48313 15.5274 6.68664Z"
                    fill="#E24329"
                  />
                  <path
                    d="M15.5273 6.68661L15.5055 6.63066C14.4726 6.84266 13.4994 7.28014 12.6552 7.91184L8 11.4319C9.58526 12.6311 10.9654 13.6731 10.9654 13.6731L14.2137 11.2405L14.2218 11.234C14.9028 10.7198 15.3982 9.99836 15.6337 9.17823C15.8691 8.35811 15.8318 7.48369 15.5273 6.68661Z"
                    fill="#FC6D26"
                  />
                  <path
                    d="M5.03461 13.6731L6.63203 14.8821L7.60508 15.6168C7.7189 15.7032 7.85788 15.75 8.00079 15.75C8.14369 15.75 8.28267 15.7032 8.39649 15.6168L9.36954 14.8821L10.967 13.6731C10.967 13.6731 9.58524 12.6279 7.99998 11.4318C6.41472 12.6279 5.03461 13.6731 5.03461 13.6731Z"
                    fill="#FCA326"
                  />
                  <path
                    d="M3.3439 7.91184C2.50043 7.27884 1.52738 6.84022 0.49449 6.62742L0.473407 6.68337C0.168277 7.48063 0.130614 8.35547 0.366096 9.176C0.601578 9.99653 1.09744 10.7183 1.77892 11.2324L1.78621 11.2381L1.80567 11.2518L5.03458 13.6699C5.03458 13.6699 6.41306 12.6279 7.99995 11.4286L3.3439 7.91184Z"
                    fill="#FC6D26"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_872_3176">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Login with GitLab
            </Button>
            <Button
              variant="outline"
              className={`${login ? "pointer-events-none" : "pointer-events-auto"} w-full select-none`}
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
              Login with X
            </Button>
          </div>
          <div className="mt-4 select-none text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
