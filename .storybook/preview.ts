import type { Preview } from "@storybook/react";
import "../src/index.scss";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",

      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#1A1A1E" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
