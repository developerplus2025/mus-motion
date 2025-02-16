import Lottie from "lottie-react";
import animationData from "./infinity.json"; // JSON tải về từ useanimations.com

const LoopAnimation = () => {
  return <Lottie animationData={animationData} loop autoplay />;
};

export default LoopAnimation;
