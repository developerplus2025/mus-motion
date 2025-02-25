"use client"
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const VideoModal = () => {
  const [isView, setView] = useState(false);
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
const [mounted, setMounted] = useState(false);
 useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; 
  const openModal = () => setView(true);
  const closeModal = () => {
    setView(false);
    setActive(false);
    setShow(false);
  };

  return (
    <div>
      {/* Nút mở modal */}
      <Button onClick={openModal}>
        <svg
          className="mr-2 h-4 w-4"
          data-testid="geist-icon"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fill="#666"
            fillRule="evenodd"
            d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
            clipRule="evenodd"
            style={{ fill: "currentColor" }}
          />
        </svg>
        Watch Demo Now
      </Button>

      {/* Render Modal trong body */}
      {
        ReactDOM.createPortal(
          <div
            className={`${isView ? "z-20" : "z-[-1]" }
            
         top-0 h-screen  fixed w-screen`}
          >
            <motion.div
              animate={
                isView
                  ? { width: '50rem', height: '35rem', opacity: 1 }
                  : { width: 0, height: 0, opacity: 0 }
              }
              exit={{width: 0, height: 0, opacity: 0 }}
              transition={{ damping: 10, duration: 0.5 }}
              className="absolute z-[60] left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 flex flex-col items-center justify-between rounded-lg border bg-[#0c0c0c] p-4 opacity-0"
            >
              <div className="flex h-[20px] w-full justify-end">
                <div className="ease-outs group flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border transition duration-300 hover:bg-white hover:text-black">
                  <svg
                    onClick={closeModal}
                    className=""
                    data-testid="geist-icon"
                    height={16}
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width={16}
                    style={{ color: 'currentcolor' }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex h-[6rem] w-[6rem] items-center justify-center rounded-full">
                  <svg
                    data-testid="geist-icon"
                    height={50}
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width={50}
                    style={{ color: 'currentcolor' }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.4549 7.22745L13.3229 7.16146L2.5 1.74999L2.4583 1.72914L1.80902 1.4045L1.3618 1.18089C1.19558 1.09778 1 1.21865 1 1.4045L1 1.9045L1 2.63041L1 2.67704L1 13.3229L1 13.3696L1 14.0955L1 14.5955C1 14.7813 1.19558 14.9022 1.3618 14.8191L1.80902 14.5955L2.4583 14.2708L2.5 14.25L13.3229 8.83852L13.4549 8.77253L14.2546 8.37267L14.5528 8.2236C14.737 8.13147 14.737 7.86851 14.5528 7.77638L14.2546 7.62731L13.4549 7.22745ZM11.6459 7.99999L2.5 3.42704L2.5 12.5729L11.6459 7.99999Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>,
          document.body // Render trong <body>
        )}
    </div>
  );
};

export default VideoModal;
