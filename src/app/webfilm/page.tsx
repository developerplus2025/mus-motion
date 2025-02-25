import React from "react";
import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import EmblaCarousel from "./components/carousel/tsx/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./components/Carousel";
import KeepWatchingCarousel from "./components/KeepWatching";

export default function WebFilmPage() {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <main>
      <Carousel />
    </main>
  );
}
