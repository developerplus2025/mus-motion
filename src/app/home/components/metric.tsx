"use client";
import Image from "next/image";
import { RadaChart1 } from "./rada-chart-1";
import { LoopAnimation } from "./loop-animation";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Users, Music, Clock, Download } from "lucide-react";
import { AudioWaveform, Disc3, Music2, Play } from "lucide-react";
import { useEffect } from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";
const items = [
  {
    id: 1,
    src: "horizontal",
    name: "",
  },
  {
    id: 2,
    src: "jakala",
    name: "",
  },
  {
    id: 3,
    src: "codal",
    name: "",
  },
  {
    id: 4,
    src: "avanade",
    name: "",
  },
];
const stats = [
  {
    title: "Active Users",
    value: "10,483",
    icon: Users,
    description: "Daily active users",
  },
  {
    title: "Tracks Created",
    value: "856,942",
    icon: Music,
    description: "Total tracks created",
  },
  {
    title: "Total Playtime",
    value: "2.4M hours",
    icon: Clock,
    description: "Cumulative playtime",
  },
  {
    title: "Downloads",
    value: "1.2M",
    icon: Download,
    description: "Total software downloads",
  },
];
export default function Metric() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);
  return (
    <div className="flex flex-col items-center gap-[2rem]">
      {/* <LoopAnimation /> */}
      <div className="rounded-lg border p-3">
        <svg
          data-testid="geist-icon"
          height={28}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={28}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="w-[750px] text-center text-[3.5rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">
          Flora by the Numbers
        </h1>
        <span className="md:text-md max-w-[550px] text-center text-zinc-500 dark:text-zinc-400">
          See why musicians and producers trust our music software! From the
          number of satisfied users to tracks created, these metrics highlight
          the impact our software is making in the music industry. Join a
          growing community of creators producing faster and smarter with our
          software.
        </span>
      </div>
      <div className="flex items-center justify-between gap-[4rem]">
        <div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <motion.div className="rounded-xl border p-6 backdrop-blur-lg transition-colors">
                {/* <div className="mb-2 flex justify-center text-white/70">
                  {stat.icon}
                </div> */}
                <div className="text-sm text-zinc-400">{stat.title}</div>
                <motion.div
                  className="mb-1 text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-zinc-400">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
