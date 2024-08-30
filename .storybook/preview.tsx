import type { Preview } from "@storybook/react";
import "../src/index.scss";
import { themes } from "@storybook/theming";
import React from "react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      layout: "centered",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#1A1A1E" },
        { name: "drop", value: "#2b2b93" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
  },
};

export default preview;

export const decorators = [
  (Story, context) => {
    const { backgrounds } = context.globals;
    const isDarkMode = backgrounds?.value === "#1A1A1E";
    const isDropMode = backgrounds?.value === "#2b2b93";

    const Flex = ({ isDark, children }) => {
      const themeClass = isDark ? "dark-theme" : "light-theme";

      return (
        <div
          className={themeClass}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "3rem",
            backgroundColor: isDark ? "var(--bg-primary-dark)" : "var(--bg-primary-light)",
            color: isDark ? "var(--text-primary-dark)" : "var(--text-primary-light)",
          }}
        >
          {children}
        </div>
      );
    };

    if (isDropMode) {
      return (
        <div>
          <Flex isDark={true}>
            <Story />
          </Flex>
          <Flex isDark={false}>
            <Story />
          </Flex>
        </div>
      );
    }

    return (
      <Flex isDark={isDarkMode}>
        <Story />
      </Flex>
    );
  },
];
