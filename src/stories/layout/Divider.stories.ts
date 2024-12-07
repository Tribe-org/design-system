import { Meta, StoryObj } from "@storybook/react";

import Divider from "../../components/layout/Divider";

const meta = {
  title: "Layout/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    //props 설정
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "medium",
  },
};
