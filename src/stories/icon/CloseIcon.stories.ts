import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Icon/CloseIcon",
  component: Icon.CloseIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: { control: "text" },
    size: { control: "number" },
  },
  args: {
    className: "",
    size: 24,
  },
} satisfies Meta<typeof Icon.BackIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CloseIcon: Story = {
  args: {
    className: "",
    size: 24,
  },
};