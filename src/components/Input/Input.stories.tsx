import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

import { CiSearch } from "react-icons/ci";
import { PiQuestionBold } from "react-icons/pi";
import { SlInfo } from "react-icons/sl";
import { themes } from "@storybook/theming";

const icons = { CiSearch, PiQuestionBold, SlInfo };

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
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
      options: [undefined, ...Object.keys(icons)],
      mapping: {
        undefined: null,
        ...icons,
      },
      control: {
        type: "select",
        labels: {
          undefined: "None",
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
    renderInputAfterIcon: {
      options: [undefined, ...Object.keys(icons)],
      mapping: {
        undefined: null,
        ...icons,
      },
      control: {
        type: "select",
        labels: {
          undefined: "None",
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
    renderInfoIcon: {
      options: [undefined, ...Object.keys(icons)],
      mapping: {
        undefined: null,
        ...icons,
      },
      control: {
        type: "select",
        labels: {
          undefined: "None",
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },

    className: { table: { disable: true } },
  },
};

export const MainInput: Story = {
  args: {
    ...Default.args,
    name: "main",
    type: "email",
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
    name: "icon",
    type: "text",
    placeholder: "your email",
    labelPosition: "top",
    renderInputBeforeIcon: CiSearch,
    renderInputAfterIcon: PiQuestionBold,
    renderInfoIcon: SlInfo,
    shortKey: "K",
    infoText: "Additional info",
    label: "Email",
    helperText: "this is a helper text",
    sizes: "sm",
  },
  argTypes: {
    ...Default.argTypes,
    renderInputBeforeIcon: { table: { disable: true } },
  },
};

export const ErrorInput: Story = {
  args: {
    ...IconInput.args,
    error: true,
    errorText: "Invalid text",
  },
  argTypes: {
    ...Default.argTypes,
    renderInputBeforeIcon: { table: { disable: true } },
  },
};
