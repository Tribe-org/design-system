import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar as SearchBarComponent } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/SearchBar",
  component: SearchBarComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onSearch: {
      action: "onSearch",
      description: "엔터를 누르거나 돋보기 아이콘을 누르면 실행되는 콜백 함수",
    },
    onChange: {
      action: "onChange",
      description: "검색어가 변경될 시 실행될 콜백 함수",
    },
  },
} satisfies Meta<typeof SearchBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SearchBar: Story = {
  args: {},
};
