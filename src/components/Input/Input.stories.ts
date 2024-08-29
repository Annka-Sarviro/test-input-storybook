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
    type: "email",
    value: "Value",
  },
  argTypes: {
    renderInputBeforeIcon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
    renderInputAfterIcon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
    renderInfoIcon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          CiSearch: "Search",
          PiQuestionBold: "Question",
          SlInfo: "Info",
        },
      },
    },
  },
};

export const IconInput: Story = {
  args: {
    ...Default.args,

    type: "tel",
    value: "Tel",
    renderInputBeforeIcon: CiSearch,
  },
  argTypes: {
    ...Default.argTypes,
    renderInputBeforeIcon: { table: { disable: true } },
  },
};
