import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme/defaultTheme";
import StyledCase from "./styledCase";
import StyledLabel from "./styledLabel";
import StyledBox from "./styledBox";

const Checkbox = (props: any | null) => {
  const { label,size, ...restProps} = props;
  return (
    <StyledBox>
      <StyledCase type="checkbox" id={label} name={label} theme={theme} size={size} {...restProps} />
      <StyledLabel htmlFor={label} theme={theme} size={size}>{label}</StyledLabel>
    </StyledBox>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["basic", "primary", "accent", "warn"]),
  size: PropTypes.oneOf(["x-small", "small", "medium", "large", "x-large"]),
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  label: "",
  variant: "accent",
  size: "medium",
  indeterminate: false,
  disabled: false
};

export default Checkbox;
export { Checkbox };
