import { Meta, StoryObj } from "@storybook/react";

import { Divider as DividerComponent } from "../../components/layout";

const meta = {
  title: "Layout/Divider",
  component: DividerComponent,
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
} satisfies Meta<typeof DividerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Divider: Story = {
  args: {
    size: "medium",
  },
};
