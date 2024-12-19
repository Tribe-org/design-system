import { HTMLAttributes, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { type Size } from "../../../types";
import { Icon } from "../../icon";

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  state?: boolean;
  animate?: boolean;
}

const layoutConfig: Record<Size, Record<string, number>> = {
  xlarge: {},
  large: {},
  medium: {
    rectWidth: 50,
    rectHeight: 30,
    radius: 12,
    top: 3,
    left: 3,
  },
  small: {
    rectWidth: 34,
    rectHeight: 20,
    radius: 8,
    top: 2,
    left: 2,
  },
  xsmall: {},
};

const uiConfig: Record<Size, Record<string, string>> = {
  xlarge: {},
  large: {},
  medium: {
    iconTopPosition: `top-[${layoutConfig.medium.top}px]`,
    circleWidth: `${layoutConfig.medium.radius * 2}px`,
    leftPixel: `${layoutConfig.medium.left}px`,
  },
  small: {
    iconTopPosition: `top-[${layoutConfig.small.top}px]`,
    circleWidth: `${layoutConfig.small.radius * 2}px`,
    leftPixel: `${layoutConfig.small.left}px`,
  },
  xsmall: {},
};

export default function Toggle({
  size = "medium",
  state = false,
  animate = true,
  className,
  ...htmlAttributes
}: ToggleProps) {
  const [toggleState, setToggleState] = useState(state);

  const iconLeftPosition = useMemo(() => {
    const leftPixel = `${uiConfig[size].leftPixel}`;
    const circleWidth = `${uiConfig[size].circleWidth}`;

    return toggleState
      ? `calc(100% - ${circleWidth} - ${leftPixel}`
      : leftPixel;
  }, [size, toggleState]);

  useEffect(() => {
    setToggleState(state);
  }, [state]);

  const handleToggleState = () => {
    setToggleState(!toggleState);
  };

  return (
    <div
      className={twMerge("relative select-none", className)}
      {...htmlAttributes}
      onClick={handleToggleState}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={layoutConfig[size].rectWidth}
        height={layoutConfig[size].rectHeight}
        viewBox="0 0 50 30"
        fill="none"
      >
        <rect
          width="50"
          height="30"
          rx="15"
          fill={toggleState ? "#41DEAC" : "#CFCFCF"}
          style={{ ...(animate && { transition: "fill 0.5s" }) }}
        />
      </svg>
      <Icon.EllipseIcon
        className={twMerge("absolute", uiConfig[size].iconTopPosition)}
        style={{
          left: iconLeftPosition,
          ...(animate && { transition: "all 0.5s" }),
        }}
        size={layoutConfig[size].radius * 2}
      />
    </div>
  );
}
