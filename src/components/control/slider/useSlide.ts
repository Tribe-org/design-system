import {
  MouseEventHandler,
  RefObject,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import { clamp } from "../../../utils";

interface UseSlideProps {
  min: number;
  max: number;
  step: number;
  sliderRef: RefObject<HTMLDivElement>;
  circleRef: RefObject<HTMLDivElement>;
  onStep?: (step: number) => void;
}

const useSlide = ({
  min,
  max,
  step,
  sliderRef,
  circleRef,
  onStep,
}: UseSlideProps) => {
  const isDragging = useRef(false);
  const mouseOffset = useRef(0);

  const [circlePosition, setCirclePosition] = useState(0);
  const [sliderRect, setSliderRect] = useState<DOMRect | null>(null);

  const stepCount = Math.ceil((max - min) / step); // Total steps
  const stepRate = 100 / stepCount; // 각 스텝의 퍼센트 크기

  const attachEvents = () => {
    // @ts-expect-error expected behavior
    document.addEventListener("mousemove", handleMouseMove);
    // @ts-expect-error expected behavior
    document.addEventListener("mouseup", handleMouseUp);

    // @ts-expect-error expected behavior
    document.addEventListener("touchmove", handleTouchMove);
    // @ts-expect-error expected behavior
    document.addEventListener("touchend", handleTouchEnd);
  };

  const cleanEvents = () => {
    // @ts-expect-error expected behavior
    document.removeEventListener("mousemove", handleMouseMove);
    // @ts-expect-error expected behavior
    document.removeEventListener("mouseup", handleMouseUp);

    // @ts-expect-error expected behavior
    document.removeEventListener("touchmove", handleTouchMove);
    // @ts-expect-error expected behavior
    document.removeEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    return () => {
      cleanEvents();
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderRect(sliderRef.current.getBoundingClientRect());
    }
  }, [sliderRef.current]);

  const startSliding = (pageX: number) => {
    mouseOffset.current = pageX;

    isDragging.current = true;
    attachEvents();
  };

  const continueSliding = (pageX: number) => {
    const delta = pageX - mouseOffset.current;
    const deltaRate = -(delta / sliderRect!.width) * 100;

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

  const stopSliding = () => {
    isDragging.current = false;
    cleanEvents();
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== circleRef.current || !sliderRect) {
      return;
    }

    startSliding(e.pageX);
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging.current || !sliderRect) {
      return;
    }

    continueSliding(e.pageX);
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
    stopSliding();
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== circleRef.current || !sliderRect) {
      return;
    }

    startSliding(e.touches[0].pageX);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging.current || !sliderRect) {
      return;
    }

    continueSliding(e.touches[0].pageX);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
    stopSliding();
  };

  return {
    circlePosition,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
    onTouchStart: handleTouchStart,
  };
};

export default useSlide;
