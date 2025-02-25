import { motion } from "framer-motion";

const AnimatedBar = () => {
  return (
    <motion.svg
      width={236}
      height={68}
      viewBox="0 0 236 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block"
    >
      <motion.path
        d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear"
          gradientUnits="userSpaceOnUse"
          animate={{
            x1: [280, 170, -60, -100],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity={0} />
          <stop stopColor="#2EB9DF" />
          <stop offset={1} stopColor="#9E00FF" stopOpacity={0} />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export default AnimatedBar;
