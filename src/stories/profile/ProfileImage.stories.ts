import type { Meta, StoryObj } from "@storybook/react";

import { ProfileImage as ProfileImageComponent } from "../../components/profile";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/ProfileImage",
  component: ProfileImageComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["xlarge", "large", "medium", "small", "xsmall"],
    },
  },
} satisfies Meta<typeof ProfileImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProfileImage: Story = {
  args: {
    src: "https://cataas.com/cat",
    size: "medium",
  },
};
