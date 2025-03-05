"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import PopularCarousel from "./PopularCarousel";
import KeepWatchingCarousel from "./KeepWatching";
import { EmblaOptionsType } from "embla-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <KeepWatchingCarousel slides={SLIDES} options={OPTIONS} />
      <div>
        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="ml-[30px] mt-[3rem]">
            <TabsTrigger value="popular">Polupar</TabsTrigger>
            <TabsTrigger value="new_releases">New Releases</TabsTrigger>
            <TabsTrigger value="recently_added">Recently Added</TabsTrigger>
            <TabsTrigger value="for_you">For You</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <PopularCarousel slides={SLIDES} options={OPTIONS} />
          </TabsContent>
          <TabsContent value="new_releases">
            <PopularCarousel slides={SLIDES} options={OPTIONS} />
          </TabsContent>
          <TabsContent value="recently_added">
            <PopularCarousel slides={SLIDES} options={OPTIONS} />
          </TabsContent>
          <TabsContent value="for_you">
            <PopularCarousel slides={SLIDES} options={OPTIONS} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
