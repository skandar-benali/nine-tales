import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme/defaultTheme";
import StyledInput from "./styledInput";
// import StyledLabel from "./styledSpan";
// import StyledContainer from "./styledContainer";

const  TextInput = (props: any | null) => {
  const { ...restProps} = props;
  return (
    <StyledInput placeholder={"placeholder"} theme={theme} {...restProps} />
  );
};

TextInput.propTypes = {
  variant: PropTypes.oneOf(["basic", "primary", "accent", "warn"]),
  size: PropTypes.oneOf(["x-small", "small", "medium", "large", "x-large"]),
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  disabled: PropTypes.bool
};

TextInput.defaultProps = {
  variant: "primary",
  size: "medium",
  prefix: null,
  suffix: null,
  disabled: false,
};

export default TextInput;
export { TextInput };
