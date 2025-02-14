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
  },
  {
    id:5,
    title:"Layer Masking",
    description:"Create complex compositions with non-destructive layer masks.",
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
      d="M0 5.25136V4.2487L0.463236 4.05702L7.71324 1.05702L8 0.938354L8.28676 1.05702L15.5368 4.05702L16 4.2487V5.25136L15.5368 5.44304L8.28676 8.44304L8 8.5617L7.71324 8.44304L0.463236 5.44304L0 5.25136ZM0 8.45825V6.83491L0.536764 7.05702L8 10.1453L15.4632 7.05702L16 6.83491V8.45825L8.28676 11.6499L8 11.7686L7.71324 11.6499L0 8.45825ZM0 11.7083V10.0849L0.536764 10.307L8 13.3953L15.4632 10.307L16 10.0849V11.7083L8.28676 14.8999L8 15.0186L7.71324 14.8999L0 11.7083ZM8 6.93835L2.71154 4.75003L8 2.5617L13.2885 4.75003L8 6.93835Z"
      fill="currentColor"
    />
  </svg>
  
  },
  {
    id:6,
    title:"Video Editing",
    description:"Seamlessly edit videos with the same powerful photo tools.",
    icon:<svg
    className="h-4 w-4 fill-[#7a7a7a] text-primary"
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
      d="M1.5 2.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V2.5ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1ZM6.745 6.76445L9.2161 8L6.745 9.23555V6.76445ZM11.1056 7.55279C11.4741 7.73705 11.4741 8.26295 11.1056 8.44721L6.22361 10.8882C5.89116 11.0544 5.5 10.8127 5.5 10.441L5.5 5.55902C5.5 5.18733 5.89116 4.94558 6.22361 5.1118L11.1056 7.55279Z"
      fill="currentColor"
    />
  </svg>
  
  },
  {
    id:7,
    title:"Audio Integration",
    description:"Add and edit audio tracks for your video projects.",
    icon:<svg
    className="h-4 w-4 fill-[#7a7a7a] text-primary"
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
      d="M6.25 1H5.5V1.75V9.40135C5.05874 9.14609 4.54643 9 4 9C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15C5.65685 15 7 13.6569 7 12C7 11.9158 6.99653 11.8324 6.98973 11.75H7V11V2.5H13.5V6.90135C13.0587 6.64609 12.5464 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 9.41581 14.9965 9.33243 14.9897 9.25H15V8.5V1.75V1H14.25H6.25ZM10.5 9.5C10.5 10.3284 11.1716 11 12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5ZM2.5 12C2.5 12.8284 3.17157 13.5 4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12Z"
      fill="currentColor"
    />
  </svg>
,  
  },
  {
    id:8,
    title:"Collaborative Editing",
    description:"Work together in real-time with team members worldwide.",
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
      d="M10.268 14.0934C11.9051 13.4838 13.2303 12.2333 13.9384 10.6469C13.1192 10.7941 12.2138 10.9111 11.2469 10.9925C11.0336 12.2005 10.695 13.2621 10.268 14.0934ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.48347 14.4823C8.32384 14.494 8.16262 14.5 8 14.5C7.83738 14.5 7.67616 14.494 7.51654 14.4823C7.5132 14.4791 7.50984 14.4759 7.50647 14.4726C7.2415 14.2165 6.94578 13.7854 6.67032 13.1558C6.41594 12.5744 6.19979 11.8714 6.04101 11.0778C6.67605 11.1088 7.33104 11.125 8 11.125C8.66896 11.125 9.32395 11.1088 9.95899 11.0778C9.80021 11.8714 9.58406 12.5744 9.32968 13.1558C9.05422 13.7854 8.7585 14.2165 8.49353 14.4726C8.49016 14.4759 8.4868 14.4791 8.48347 14.4823ZM11.4187 9.72246C12.5137 9.62096 13.5116 9.47245 14.3724 9.28806C14.4561 8.87172 14.5 8.44099 14.5 8C14.5 7.55901 14.4561 7.12828 14.3724 6.71194C13.5116 6.52755 12.5137 6.37904 11.4187 6.27753C11.4719 6.83232 11.5 7.40867 11.5 8C11.5 8.59133 11.4719 9.16768 11.4187 9.72246ZM10.1525 6.18401C10.2157 6.75982 10.25 7.36805 10.25 8C10.25 8.63195 10.2157 9.24018 10.1525 9.81598C9.46123 9.85455 8.7409 9.875 8 9.875C7.25909 9.875 6.53877 9.85455 5.84749 9.81598C5.7843 9.24018 5.75 8.63195 5.75 8C5.75 7.36805 5.7843 6.75982 5.84749 6.18401C6.53877 6.14545 7.25909 6.125 8 6.125C8.74091 6.125 9.46123 6.14545 10.1525 6.18401ZM11.2469 5.00748C12.2138 5.08891 13.1191 5.20593 13.9384 5.35306C13.2303 3.7667 11.9051 2.51622 10.268 1.90662C10.695 2.73788 11.0336 3.79953 11.2469 5.00748ZM8.48347 1.51771C8.4868 1.52089 8.49016 1.52411 8.49353 1.52737C8.7585 1.78353 9.05422 2.21456 9.32968 2.84417C9.58406 3.42562 9.80021 4.12856 9.95899 4.92219C9.32395 4.89118 8.66896 4.875 8 4.875C7.33104 4.875 6.67605 4.89118 6.04101 4.92219C6.19978 4.12856 6.41594 3.42562 6.67032 2.84417C6.94578 2.21456 7.2415 1.78353 7.50647 1.52737C7.50984 1.52411 7.51319 1.52089 7.51653 1.51771C7.67615 1.50597 7.83738 1.5 8 1.5C8.16262 1.5 8.32384 1.50597 8.48347 1.51771ZM5.73202 1.90663C4.0949 2.51622 2.76975 3.7667 2.06159 5.35306C2.88085 5.20593 3.78617 5.08891 4.75309 5.00748C4.96639 3.79953 5.30497 2.73788 5.73202 1.90663ZM4.58133 6.27753C3.48633 6.37904 2.48837 6.52755 1.62761 6.71194C1.54392 7.12828 1.5 7.55901 1.5 8C1.5 8.44099 1.54392 8.87172 1.62761 9.28806C2.48837 9.47245 3.48633 9.62096 4.58133 9.72246C4.52807 9.16768 4.5 8.59133 4.5 8C4.5 7.40867 4.52807 6.83232 4.58133 6.27753ZM4.75309 10.9925C3.78617 10.9111 2.88085 10.7941 2.06159 10.6469C2.76975 12.2333 4.0949 13.4838 5.73202 14.0934C5.30497 13.2621 4.96639 12.2005 4.75309 10.9925Z"
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
