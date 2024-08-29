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

    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--bg-primary", "var(--bg-primary-dark)");
      root.style.setProperty("--bg-secondary", "var(--bg-primary-light)");
      root.style.setProperty("--text-primary", "var(--text-primary-dark)");
      root.style.setProperty("--text-quaternary", "var--text-quaternary-dark)");
      root.style.setProperty("--text-tertiary", "var(--text-tertiary-dark)");
      root.style.setProperty("--text-error", "var(--text-error-dark)");
      root.style.setProperty("--text-disabled", "var(--text-disabled-dark)");
      root.style.setProperty("--fg-quinary", "var(--fg-quinary-dark)");
      root.style.setProperty("--fg-disabled", "var(--fg-disabled-dark)");
      root.style.setProperty("--fg-error-primary", "var(--fg-error-primary-dark)");
      root.style.setProperty("--fg-primary", "var(--fg-primary-dark)");
      root.style.setProperty("--border-primary", "var(--border-primary-dark)");
      root.style.setProperty("--border-secondary", "var(--border-primary-dark)");
    } else {
      root.style.setProperty("--bg-primary", "var(--bg-primary-light)");
      root.style.setProperty("--bg-secondary", "var(--bg-primary-dark)");
      root.style.setProperty("--text-primary", "var(--text-primary-light)");
      root.style.setProperty("--text-quaternary", "var--text-quaternary-light)");
      root.style.setProperty("--text-tertiary", "var(--text-tertiary-light)");
      root.style.setProperty("--text-error", "var(--text-error-light)");
      root.style.setProperty("--text-disabled", "var(--text-disabled-light)");
      root.style.setProperty("--fg-quinary", "var(--fg-quinary-light)");
      root.style.setProperty("--fg-disabled", "var(--fg-disabled-light)");
      root.style.setProperty("--fg-error-primary", "var(--fg-error-primary-light)");
      root.style.setProperty("--fg-primary", "var(--fg-primary-light)");
      root.style.setProperty("--border-primary", "var(--border-primary-light)");
      root.style.setProperty("--border-secondary", "var(--border-primary-light)");
    }

    return <Story />;
  },
];
