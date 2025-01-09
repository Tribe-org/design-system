import type { Meta, StoryObj } from "@storybook/react";

import { Slider as SliderComponent } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Control/Slider",
  component: SliderComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    onStep: { action: "onStep" },
  },
} satisfies Meta<typeof SliderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Slider: Story = {
  args: {
    min: 1,
    max: 100,
    step: 1,
    color: "primary",
    style: { width: "500px" },
  },
};
