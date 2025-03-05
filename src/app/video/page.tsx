import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import React from "react";

export default function VideoPage() {
  return (
    <div className="mx-[3rem] my-[4rem] grid w-full grid-cols-3 place-content-center justify-items-center">
      <div className="flex h-[300px] w-[500px] flex-col justify-between rounded-lg border">
        <div className="flex h-full flex-col items-center justify-between py-[1rem]">
          <div className="flex">
            <div className="h-[200px] w-[380px] rounded-lg bg-[#0c0c0c]">
              <iframe
                src="https://drive.google.com/file/d/16GJV_lbb_dIL-iv2kd-L_fYf9e/preview"
                width="380"
                height="200"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-[60%]"
            />
          </div>
        </div>
        <div className="flex h-[40px] items-center justify-between rounded-b-lg border-t bg-[#0c0c0c] px-[3rem]">
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
              d="M11 1.5H5C4.44772 1.5 4 1.94772 4 2.5V13.4732L7.16201 11.7485C7.68434 11.4635 8.31566 11.4635 8.83799 11.7485L12 13.4732V2.5C12 1.94772 11.5523 1.5 11 1.5ZM13.5 14.2914V2.5C13.5 1.11929 12.3807 0 11 0H5C3.61929 0 2.5 1.11929 2.5 2.5V14.2914V16L4 15.1818L7.88029 13.0653C7.95491 13.0246 8.04509 13.0246 8.11971 13.0653L12 15.1818L13.5 16V14.2914Z"
              fill="currentColor"
            />
          </svg>
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
              d="M5.14697 7.11102L5.11553 7.13103L4.53256 7.50201L4.08144 7.78909C3.92706 7.88733 3.92706 8.11268 4.08144 8.21092L4.53256 8.498L5.11553 8.86898L5.14697 8.88899L13.25 14.0455L13.3308 14.0969L14.0343 14.5446L14.3658 14.7555C14.5322 14.8614 14.75 14.7419 14.75 14.5446V14.1517V13.3178V13.222L14.75 2.77797V2.6822V1.84828V1.45542C14.75 1.25815 14.5322 1.1386 14.3658 1.24451L14.0343 1.45542L13.3308 1.90313L13.25 1.95455L5.14697 7.11102ZM13.25 3.73251L6.54394 8.00001L13.25 12.2675L13.25 3.73251ZM0.75 2V1.25H2.25V2V14V14.75H0.75V14V2Z"
              fill="currentColor"
            />
          </svg>
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
              d="M13.5 8C13.5 4.96643 11.0257 2.5 7.96452 2.5C5.42843 2.5 3.29365 4.19393 2.63724 6.5H5.25H6V8H5.25H0.75C0.335787 8 0 7.66421 0 7.25V2.75V2H1.5V2.75V5.23347C2.57851 2.74164 5.06835 1 7.96452 1C11.8461 1 15 4.13001 15 8C15 11.87 11.8461 15 7.96452 15C5.62368 15 3.54872 13.8617 2.27046 12.1122L1.828 11.5066L3.03915 10.6217L3.48161 11.2273C4.48831 12.6051 6.12055 13.5 7.96452 13.5C11.0257 13.5 13.5 11.0336 13.5 8Z"
              fill="currentColor"
            />
          </svg>

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
              d="M13.4549 7.22745L13.3229 7.16146L2.5 1.74999L2.4583 1.72914L1.80902 1.4045L1.3618 1.18089C1.19558 1.09778 1 1.21865 1 1.4045L1 1.9045L1 2.63041L1 2.67704L1 13.3229L1 13.3696L1 14.0955L1 14.5955C1 14.7813 1.19558 14.9022 1.3618 14.8191L1.80902 14.5955L2.4583 14.2708L2.5 14.25L13.3229 8.83852L13.4549 8.77253L14.2546 8.37267L14.5528 8.2236C14.737 8.13147 14.737 7.86851 14.5528 7.77638L14.2546 7.62731L13.4549 7.22745ZM11.6459 7.99999L2.5 3.42704L2.5 12.5729L11.6459 7.99999Z"
              fill="currentColor"
            />
          </svg>
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
              d="M2.5 8C2.5 4.96643 4.97431 2.5 8.03548 2.5C10.5716 2.5 12.7064 4.19393 13.3628 6.5H10.75H10V8H10.75H15.25C15.6642 8 16 7.66421 16 7.25V2.75V2H14.5V2.75V5.23347C13.4215 2.74164 10.9316 1 8.03548 1C4.1539 1 1 4.13001 1 8C1 11.87 4.1539 15 8.03548 15C10.3763 15 12.4513 13.8617 13.7295 12.1122L14.172 11.5066L12.9609 10.6217L12.5184 11.2273C11.5117 12.6051 9.87945 13.5 8.03548 13.5C4.97431 13.5 2.5 11.0336 2.5 8Z"
              fill="currentColor"
            />
          </svg>
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
              d="M10.603 7.11102L10.6345 7.13103L11.2174 7.50201L11.6686 7.78909C11.8229 7.88733 11.8229 8.11268 11.6686 8.21092L11.2174 8.498L10.6345 8.86898L10.603 8.88899L2.5 14.0455L2.4192 14.0969L1.71566 14.5446L1.38422 14.7555C1.21779 14.8614 1 14.7419 1 14.5446V14.1517V13.3178V13.222V2.77797V2.6822V1.84828V1.45542C1 1.25815 1.21779 1.1386 1.38422 1.24451L1.71566 1.45542L2.4192 1.90313L2.5 1.95455L10.603 7.11102ZM2.5 3.73251L9.20606 8.00001L2.5 12.2675L2.5 3.73251ZM15 2V1.25H13.5V2V14V14.75H15V14V2Z"
              fill="currentColor"
            />
          </svg>
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
              d="M0 3.5C0 2.11929 1.11929 1 2.5 1H13.5C14.8807 1 16 2.11929 16 3.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V3.5ZM2 7C2 5.75736 3.00736 4.75 4.25 4.75H5.25C6.49264 4.75 7.5 5.75736 7.5 7H6C6 6.58579 5.66421 6.25 5.25 6.25H4.25C3.83579 6.25 3.5 6.58579 3.5 7V9C3.5 9.41421 3.83579 9.75 4.25 9.75H5.25C5.66421 9.75 6 9.41421 6 9H7.5C7.5 10.2426 6.49264 11.25 5.25 11.25H4.25C3.00736 11.25 2 10.2426 2 9V7ZM10.75 4.75C9.50736 4.75 8.5 5.75736 8.5 7V9C8.5 10.2426 9.50736 11.25 10.75 11.25H11.75C12.9926 11.25 14 10.2426 14 9H12.5C12.5 9.41421 12.1642 9.75 11.75 9.75H10.75C10.3358 9.75 10 9.41421 10 9V7C10 6.58579 10.3358 6.25 10.75 6.25H11.75C12.1642 6.25 12.5 6.58579 12.5 7H14C14 5.75736 12.9926 4.75 11.75 4.75H10.75Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
