import * as React from "react";
import {withKnobs, select, boolean} from "@storybook/addon-knobs";
import { TextInput as TextInputComponent } from "../component/textInput";

export default {
  title: "TextInput",
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs]
};

const variants = ["basic", "primary", "accent", "warn"];
const sizes = ["x-small", "small", "medium", "large", "x-large"];

export const Input = () => (
  <TextInputComponent
    variant={select("variant", variants,"primary")}
    size={select("size", sizes, "medium")}
    disabled={boolean("disabled", false)}
    prefix=""
    suffix=""
  />
);
