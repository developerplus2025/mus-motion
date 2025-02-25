import Image from "next/image";
import { RadaChart1 } from "./rada-chart-1";
import { LoopAnimation } from "./loop-animation";
import { motion } from "framer-motion";
import { AudioWaveform, Disc3, Music2, Play } from "lucide-react";
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
  { icon: <Play className="h-6 w-6" />, label: "Beats Sold", value: "500+" },
  {
    icon: <Disc3 className="h-6 w-6" />,
    label: "Unique Tracks",
    value: "1000+",
  },
  {
    icon: <Music2 className="h-6 w-6" />,
    label: "Happy Artists",
    value: "200+",
  },
  {
    icon: <AudioWaveform className="h-6 w-6" />,
    label: "Genres",
    value: "10+",
  },
];
export default function Metric() {
  return (
    <div className="flex flex-col items-center gap-[2rem]">
      <LoopAnimation />
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
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <motion.div className="rounded-xl border p-6 backdrop-blur-lg transition-colors">
                <div className="mb-2 flex justify-center text-white/70">
                  {stat.icon}
                </div>
                <motion.div
                  className="mb-1 text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
