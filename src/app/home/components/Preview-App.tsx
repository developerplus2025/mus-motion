import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useTheme } from "next-themes";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const PreViewAppCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: false,
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const theme = useTheme();
  return (
    <div className="">
      <div className="embla_home w-[650px]">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide rounded-lg" key={index}>
                <Image
                  src={`/image/preview_App_${index}.png`}
                  height={600}
                  alt={`preview_App_${index}`}
                  width={650}
                  className={`min-[645px]:h-[450px] min-[645px]:max-w-[640px] xl:h-[450px] xl:max-w-[680px] ${index === 1 ? "rounded-lg" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="embla__controls mt-2">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot${index === selectedIndex ? "embla__dot--selected" : ""}`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PreViewAppCarousel;
