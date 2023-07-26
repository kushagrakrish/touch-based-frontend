import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  border: 0, // change the appearance of the border
  borderRadius: "12px", // remove the border radius
  fontSize: "14px",
  fontWeight: "semibold",
  fontStyle: "inter",
  textColor: "#0B0B0B",
  background: "linear-gradient(246.26deg, #0353D5 -6.58%, #6DAEFC 96.96%)",
  boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
  _hover: {
    background: "linear-gradient(246.26deg, #0353D5 -6.58%, #6DAEFC 96.96%)",
  },
  _active: {
    background: "linear-gradient(123.54deg, #4FC3F7 12.51%, #3949AB 91.59%)",
    textColor: "#0B0B0B",
  },
});

const link = defineStyle({
  fontWeight: "semibold",
  padding: 0,
  fontSize: "14px",
  fontStyle: "inter",
  rounded: 0,
  borderBottom: "1px solid #4FC3F7",
  background: "linear-gradient(246.26deg, #0353D5 -6.58%, #6DAEFC 96.96%)",
  bgClip: "text",
  _active: {
    textDecoration: "none",
    background:
      "linear-gradient(123.54deg, rgba(79, 195, 247, 0.5) 12.51%, rgba(57, 73, 171, 0.5) 91.59%)",
    bgClip: "text",
    textColor: "transparent",
    borderBottom: "1px solid #3949AB",
  },
  _hover: {
    background: "linear-gradient(123.54deg, #4FC3F7 12.51%, #3949AB 91.59%)",
    bgClip: "text",
    textColor: "transparent",
    borderBottom: "1px solid #3949AB",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    solid,
    link,
  },
});
