"use client";

import { motion } from "framer-motion";

const transitionVariants = {
  initial: { top: "100%" },
  animate: { top: "0%", translateY:"-100%", transition: { duration: 2, ease: "easeInOut" } },
  exit: { y: "-100%", transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function PageTransition() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
}
