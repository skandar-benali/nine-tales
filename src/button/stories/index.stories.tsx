import * as React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { Button as ButtonComponent } from "../component/button";

export default {
  title: "Button",
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs]
};

const variants = ["basic", "primary", "accent", "warn"];
const shapes = ["basic", "raised", "stroked", "flat"];
const sizes = ["x-small", "small", "medium", "large", "x-large"];

export const Button = () => (
  <ButtonComponent
    variant={select("variant", variants,"primary")}
    shape={select("shape", shapes, "basic")}
    size={select("size", sizes, "medium")}
    disabled={boolean("disabled", false)}
    loading={boolean("loading", false)}
  >
    {text("button text", "click me")}
  </ButtonComponent>
);
