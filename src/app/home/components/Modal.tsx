"use client";

import { motion, AnimatePresence } from "framer-motion";
import Video from 'next-video';
import awesomeVideo from "/videos/get-started.mp4";
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
  } from 'media-chrome/react';
import { useEffect } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"; // Tắt scroll
    } else {
      document.body.style.overflowY = "auto"; // Bật lại scroll
    }

    return () => {
      document.body.style.overflowY = "auto"; // Đảm bảo luôn khôi phục scroll khi unmount
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black w-[50rem] flex flex-col h-[35rem] border rounded-lg pt-4 z-10"
            style={{
              // transformStyle: "preserve-3d",
              perspective: 500, // Tạo chiều sâu 3D
            }}
            initial={{
              filter:"blur(40px)",
              perspective:500,
              // opacity: 0,
              rotateY: -80, // Nghiêng về sau bên trái
              rotateX: 5,
              translateZ: -800, // Đẩy modal ra xa lúc mới xuất hiện
              // scale: 0.9,
            }}
            animate={{
              filter:"blur(0px)",
              opacity: 1,
              rotateY: 0, // Trở lại trạng thái bình thường
              rotateX: 0,
              translateZ: 0, // Kéo modal về gần
              scale: 1,
            }}
            exit={{
              // opacity: 0,
              rotateY: 70, // Khi đóng modal, nghiêng về sau bên trái
              rotateX: -16,
              translateZ: -800, // Đẩy modal ra xa dần khi đóng
              // scale: 0.9,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
           <div className="flex px-3 w-full pb-4 justify-end">
              <div  onClick={onClose} className="ease-outs group flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border transition duration-300 hover:bg-white hover:text-black">
                <svg
                 
                  className=""
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
                    d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          <div className="flex h-full w-full items-center justify-center">
            <Video  aria-errormessage=""  aria-hidden="false" className="host  rounded-lg" src={awesomeVideo} />
            {/* <video src={"../../../../videos/vercel-ship.mp4"}></video> */}
          </div>
         </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
