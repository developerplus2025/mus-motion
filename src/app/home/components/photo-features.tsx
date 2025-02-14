import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  Camera,
  ImageIcon,
  Palette,
  Share2,
  Cloud,
  Zap,
  Layers,
  Video,
  Music,
  Globe,
} from "lucide-react";
import Image from "next/image";
import React from "react";
const items = [
  {
    id:1,
    title:"Advanced Editing Suite",
    description:"Professional-grade tools for perfect adjustments and creative effects.",
    icon:<svg
    data-testid="geist-icon"
    className="h-4 w-4 fill-[#7a7a7a] text-primary"
    height={16}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={16}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 2.5H1.5V9.18933L2.96966 7.71967L3.18933 7.5H3.49999H6.63001H6.93933L6.96966 7.46967L10.4697 3.96967L11.5303 3.96967L14.5 6.93934V2.5ZM8.00066 8.55999L9.53034 10.0897L10.0607 10.62L9.00001 11.6807L8.46968 11.1503L6.31935 9H3.81065L1.53032 11.2803L1.5 11.3106V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V9.06066L11 5.56066L8.03032 8.53033L8.00066 8.55999ZM4.05312e-06 10.8107V12.5C4.05312e-06 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V9.56066L16.5607 9L16.0303 8.46967L16 8.43934V2.5V1H14.5H1.5H4.05312e-06V2.5V10.6893L-0.0606689 10.75L4.05312e-06 10.8107Z"
      fill="currentColor"
    />
  </svg>
,  
  },
  {
    id:2,
    title:"AI-Powered Enhancements",
    description:"Intelligent auto-adjustments and smart filters for stunning results.",
    icon:<svg
    data-testid="geist-icon"
    className="h-4 w-4 fill-[#7a7a7a] text-primary"
    height={16}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={16}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.15714 0L2.33264 9.40776L1.77252 10.5H3.00001H7.00001C7.13808 10.5 7.25001 10.6119 7.25001 10.75V16H8.84288L13.6674 6.59224L14.2275 5.5H13H9.00001C8.86194 5.5 8.75001 5.38807 8.75001 5.25V0H7.15714ZM7.00001 9H4.22749L7.25001 3.1061V5.25C7.25001 6.2165 8.03351 7 9.00001 7H11.7725L8.75001 12.8939V10.75C8.75001 9.7835 7.96651 9 7.00001 9Z"
      fill="currentColor"
    />
  </svg>
  ,
  },
  {
    id:3,
    title:"Seamless Sharing",
    description:"Instantly share your creations across all major platforms.",
    icon:<svg
    data-testid="geist-icon"
    className="h-4 w-4 fill-[#7a7a7a] text-primary"
    height={16}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={16}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11.25V10.5H13.5V11.25V12.75C13.5 13.1642 13.1642 13.5 12.75 13.5H3.25C2.83579 13.5 2.5 13.1642 2.5 12.75L2.5 3.25C2.5 2.83579 2.83579 2.5 3.25 2.5H5.75H6.5V1H5.75H3.25C2.00736 1 1 2.00736 1 3.25V12.75C1 13.9926 2.00736 15 3.25 15H12.75C13.9926 15 15 13.9926 15 12.75V11.25ZM15 5.5L10.5 1V4C7.46243 4 5 6.46243 5 9.5V10L5.05855 9.91218C6.27146 8.09281 8.31339 7 10.5 7V10L15 5.5Z"
      fill="currentColor"
    />
  </svg>
,  
  },{
    id:4,
    title:"Cloud Integration",
    description:"Automatic backup and sync across all your devices.",
    icon:<svg
    data-testid="geist-icon"
    className="h-4 w-4 fill-[#7a7a7a] text-primary"
    height={16}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={16}
    style={{ color: "currentcolor" }}
  >
    <path
      d="M12 6.50879L11.25 6.50798L11.2492 7.20768L11.9472 7.25693L12 6.50879ZM12 6.5L12.75 6.50081V6.5H12ZM4 6.5H3.25L3.25 6.50081L4 6.5ZM4.00001 6.50879L4.05281 7.25693L4.75077 7.20767L4.75001 6.50798L4.00001 6.50879ZM4.25 12.75C2.73122 12.75 1.5 11.5188 1.5 10H0C0 12.3472 1.90279 14.25 4.25 14.25V12.75ZM11.75 12.75H4.25V14.25H11.75V12.75ZM14.5 10C14.5 11.5188 13.2688 12.75 11.75 12.75V14.25C14.0972 14.25 16 12.3472 16 10H14.5ZM11.9472 7.25693C13.3736 7.35759 14.5 8.54758 14.5 10H16C16 7.75454 14.2591 5.91635 12.0528 5.76065L11.9472 7.25693ZM11.25 6.49919L11.25 6.50798L12.75 6.50961L12.75 6.50081L11.25 6.49919ZM8 3.25C9.79493 3.25 11.25 4.70507 11.25 6.5H12.75C12.75 3.87665 10.6234 1.75 8 1.75V3.25ZM4.75 6.5C4.75 4.70507 6.20507 3.25 8 3.25V1.75C5.37665 1.75 3.25 3.87665 3.25 6.5H4.75ZM4.75001 6.50798L4.75 6.49919L3.25 6.50081L3.25001 6.5096L4.75001 6.50798ZM1.5 10C1.5 8.54758 2.62644 7.35759 4.05281 7.25693L3.94721 5.76065C1.74094 5.91635 0 7.75454 0 10H1.5Z"
      fill="currentColor"
    />
  </svg>
  ,
  }

]
export default function PhotoFeatures() {
  const ref = React.useRef(null); // Tạo một ref để liên kết với phần tử
  const isInView = useInView(ref, { once: true }); // Quan sát phần tử với tùy chọn

  return (
    <section className="w-full bg-background py-[2rem] md:py-24 lg:py-[2rem]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row-reverse lg:gap-12">
          {/* Left side - Photo */}
          {/* <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/Opera Snapshot_2024-12-25_203610_stromatech.vercel.app.png"
                alt="Feature illustration"
                className=""
                fill
                priority
              />
            </div>
          </div> */}

          {/* Right side - Content */}
          <div>
            <motion.div
              ref={ref} // Gắn ref để quan sát
              initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Hiệu ứng khi trong viewport
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <Badge variant="outline" className="text-sm">
                Revolutionary Features
              </Badge>
              <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-[2.75rem]/none">
                Unleash Your Creative Vision
              </h2>
              <p className="md:text-md max-w-[600px] text-center text-zinc-500 dark:text-zinc-400">
                Experience photography like never before with our cutting-edge
                tools and features. From advanced editing to AI-powered
                enhancements, we&apos;ve got everything you need to bring your
                creative vision to life.
              </p>
            </motion.div>

            <motion.div
              ref={ref} // Gắn ref để quan sát
              initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Hiệu ứng khi trong viewport
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="relative mt-[3.5rem] grid border md:grid-cols-2"
            >
              <div className="absolute -left-[10px] -top-[10px] h-[10px] w-[10px] border-b border-r"></div>
              <div className="absolute -right-[10px] -top-[10px] h-[10px] w-[10px] border-b border-l"></div>
              <div className="absolute -bottom-[10px] -left-[10px] h-[10px] w-[10px] border-r border-t"></div>
              <div className="absolute -bottom-[10px] -right-[10px] h-[10px] w-[10px] border-l border-t"></div>
              {items.map((item) => (
 <div key={item.id} className="flex items-center gap-4 border-r border-primary/10 h-[70px] px-3 py-2 transition-colors hover:border-primary/30">
 <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg">
  {item.icon}
 </div>
 <div className="space-y-1">
   <h3 className="text-sm font-semibold">
     {item.title}
   </h3>
   <p className="text-sm text-muted-foreground">
    {item.description}
   </p>
 </div>
</div>
              ))}
             
              
            </motion.div>

            <div className="mt-[3rem] flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* <Button size="lg" className="w-full text-black sm:w-auto">
                Start Free Trial
              </Button> */}
              <div className="relative">
                <Button className="text-primary-foreground">
                  Start Free Trial
                </Button>
                {/* <span className="absolute -right-2 -top-4 rounded-full border bg-black px-2 py-1 text-xs font-bold text-white">
                  14 Days Free
                </span> */}
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                View All Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
