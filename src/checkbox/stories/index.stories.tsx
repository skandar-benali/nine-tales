import * as React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { Checkbox as CheckboxComponent } from "../component/checkbox";

export default {
  title: "Checkbox",
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs]
};

const variants = ["basic", "primary", "accent", "warn"];
const sizes = ["x-small", "small", "medium", "large", "x-large"];

export const Checkbox = () => (
  <CheckboxComponent
    label={text("label", "check me!")}
    variant={select("variant", variants,"primary")}
    size={select("size", sizes, "medium")}
    disabled={boolean("disabled", false)}
    indeterminate={boolean("indeterminate", false)}
  />
);
