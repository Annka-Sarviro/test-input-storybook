import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

import { CiSearch } from "react-icons/ci";
import { PiQuestionBold } from "react-icons/pi";
import { SlInfo } from "react-icons/sl";
import { fn } from "@storybook/test";

const icons = { CiSearch, PiQuestionBold, SlInfo };

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  //   args: { onFocus: fn() },
  //   parameters: {
  //     actions: {
  //       handles: ["mouseover", "click .btn"],
  //     },
  //   },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    value: "",
    name: "default",
    placeholder: "Input...",
    error: false,
    disabled: false,
    alignment: "left",
    sizes: "xs",
    quiet: false,
  },
  argTypes: {
    renderInputBeforeIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
    renderInputAfterIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
    renderInfoIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
    setValue: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export const MainInput: Story = {
  args: {
    ...Default.args,
    name: "main",
    type: "email",
    value: "aaa@aaa.com",
    placeholder: "your email",
    label: "Email",
  },
  argTypes: {
    ...Default.argTypes,
  },
};

export const IconInput: Story = {
  args: {
    ...Default.args,
    name: "main",
    type: "email",
    value: "aaa@aaa.com",
    placeholder: "your email",
    labelPosition: "top",
    renderInputBeforeIcon: CiSearch,
  },
  argTypes: {
    ...Default.argTypes,
    renderInputBeforeIcon: { table: { disable: true } },
  },
};
