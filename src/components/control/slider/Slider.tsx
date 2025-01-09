import { HTMLAttributes, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { circle } from "../../../assets";
import type { Color } from "../../../types";
import useSlide from "./useSlide";

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  min?: number;
  max?: number;
  step?: number;
  color?: Color;
  onStep?: (step: number) => void;
}

const getColor = (color: Color) => {
  switch (color) {
    case "primary":
      return "bg-tribe-green";
    case "secondary":
      return "bg-tribe-orange";
    default:
      return "bg-tribe-green";
  }
};

export default function Slider({
  min = 1,
  max = 100,
  step = 1,
  color = "primary",
  className,
  onStep,
  ...htmlAttributes
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const { circlePosition, onMouseDown, onTouchStart } = useSlide({
    min,
    max,
    step,
    onStep,
    sliderRef,
    circleRef,
  });

  const backgroundColor = getColor(color);

  return (
    <div
      className={twMerge(
        "relative flex flex-col items-center justify-center",
        className,
      )}
      ref={sliderRef}
      onTouchStart={onTouchStart}
      onMouseDown={onMouseDown}
      {...htmlAttributes}
    >
      <div className="absolute left-0 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2">
        <img
          className="pointer-events-none h-full w-full select-none"
          src={circle}
          alt=""
        />
      </div>
      <div className={twMerge("h-[2px] w-full", backgroundColor)} />
      <div
        ref={circleRef}
        className="absolute top-1/2 h-8 w-8 -translate-y-1/2 translate-x-1/2 cursor-pointer"
        style={{ right: `${circlePosition}%` }}
      >
        <img
          className="pointer-events-none h-full w-full select-none"
          src={circle}
          alt=""
        />
      </div>
    </div>
  );
}
