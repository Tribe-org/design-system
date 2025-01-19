import type { Meta, StoryObj } from "@storybook/react";

import { Button as ButtonComponent } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Button",
  component: ButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "black", "gray", "error"],
    },
    size: {
      control: "select",
      options: ["large", "medium"],
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Button: Story = {
  args: {
    children: "버튼",
    color: "primary",
    size: "large",
  },
  render: ({ children, ...args }) => {
    return (
      <div className="w-[375px] px-3">
        <ButtonComponent {...args}>{children}</ButtonComponent>
      </div>
    );
  },
};
