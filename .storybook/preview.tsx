import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "../src/index.scss";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      layout: "centered",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#1A1A1E" },
        { name: "drop", value: "#6e6e7a" },
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

const ItemTypes = {
  STORY: "story",
};

const Flex = ({ isDark, children, id, setCurrentContainer, currentContainer }) => {
  const [, ref] = useDrop({
    accept: ItemTypes.STORY,
    drop: () => {
      setCurrentContainer(id);
    },
  });

  const themeClass = isDark ? "dark-theme" : "light-theme";

  return (
    <div
      ref={ref}
      className={themeClass}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "3rem 10rem",
        backgroundColor: isDark ? "var(--bg-primary-dark)" : "var(--bg-primary-light)",
        color: isDark ? "var(--text-primary-dark)" : "var(--text-primary-light)",
        minHeight: "300px",
        border: "1px dashed gray",
        margin: "1rem",
      }}
    >
      {children}
    </div>
  );
};

const DraggableStory = ({ children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.STORY,
    item: {},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export const decorators = [
  (Story, context) => {
    const { backgrounds } = context.globals;
    const isDarkMode = backgrounds?.value === "#1A1A1E";
    const isDropMode = backgrounds?.value === "#6e6e7a";

    const [currentContainer, setCurrentContainer] = useState("dark");

    if (isDropMode) {
      return (
        <DndProvider backend={HTML5Backend}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Flex isDark={true} id="dark" setCurrentContainer={setCurrentContainer} currentContainer={currentContainer}>
              {currentContainer === "dark" && (
                <DraggableStory>
                  <Story />
                </DraggableStory>
              )}
            </Flex>
            <Flex
              isDark={false}
              id="light"
              setCurrentContainer={setCurrentContainer}
              currentContainer={currentContainer}
            >
              {currentContainer === "light" && (
                <DraggableStory>
                  <Story />
                </DraggableStory>
              )}
            </Flex>
          </div>
        </DndProvider>
      );
    }

    return (
      <DndProvider backend={HTML5Backend}>
        <Flex
          isDark={isDarkMode}
          id="single"
          setCurrentContainer={setCurrentContainer}
          currentContainer={currentContainer}
        >
          <DraggableStory>
            <Story />
          </DraggableStory>
        </Flex>
      </DndProvider>
    );
  },
];
