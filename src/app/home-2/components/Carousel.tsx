"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { EmblaOptionsType } from "embla-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PreViewAppCarousel from "./Preview-App";
export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
  const SLIDE_COUNT = 2;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <div>
        <PreViewAppCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
