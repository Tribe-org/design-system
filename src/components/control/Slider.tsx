import {
  HTMLAttributes,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

import { circle } from "../../assets";
import type { Color } from "../../types";
import { clamp } from "../../utils";

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
  const isDragging = useRef(false);
  const mouseOffset = useRef(0);

  const [circlePosition, setCirclePosition] = useState(0);
  const [sliderRect, setSliderRect] = useState<DOMRect | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const stepCount = Math.ceil((max - min) / step); // Total steps
  const stepRate = 100 / stepCount; // 각 스텝의 퍼센트 크기

  useEffect(() => {
    if (sliderRef.current) {
      setSliderRect(sliderRef.current.getBoundingClientRect());
    }
  }, [sliderRef.current]);

  useEffect(() => {
    return () => {
      cleanEvents();
    };
  }, []);

  const backgroundColor = getColor(color);

  const attachEvents = () => {
    // @ts-expect-error expected behavior
    document.addEventListener("mousemove", handleMouseMove);
    // @ts-expect-error expected behavior
    document.addEventListener("mouseup", handleMouseUp);
  };

  const cleanEvents = () => {
    // @ts-expect-error expected behavior
    document.removeEventListener("mousemove", handleMouseMove);
    // @ts-expect-error expected behavior
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== circleRef.current || !sliderRect) {
      return;
    }

    mouseOffset.current = e.pageX;

    isDragging.current = true;
    attachEvents();
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging.current || !sliderRect) {
      return;
    }

    const delta = e.pageX - mouseOffset.current;
    const deltaRate = -(delta / sliderRect.width) * 100;

    const rawPosition = circlePosition + deltaRate;
    const snappedPosition = Math.round(rawPosition / stepRate) * stepRate;

    const newCirclePosition = clamp({
      min: 0,
      max: 100,
      value: snappedPosition,
    });
    const newCirclePositionInStep = Math.round(
      min + (newCirclePosition / 100) * (max - min),
    );

    setCirclePosition(newCirclePosition);

    if (onStep) {
      onStep(newCirclePositionInStep);
    }
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
    if (sliderRect) {
      const snappedValue = Math.round(
        min + (circlePosition / 100) * (max - min),
      );
      console.log("Final Value:", snappedValue);
    }

    isDragging.current = false;
    cleanEvents();
  };

  return (
    <div
      className={twMerge(
        "relative flex flex-col items-center justify-center",
        className,
      )}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
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
