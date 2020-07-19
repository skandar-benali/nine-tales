import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme/defaultTheme";
import StyledButton from "./styledButton";
import StyledSpan from "./styledSpan";
import Overlay from "./overlay/overlay";

const  Button = (props: any | null) => {
  const { children, disabled, loading, variant, ...restProps} = props;
  return (
    <StyledButton theme={theme} type="button" variant={variant}{...restProps}>
      <StyledSpan>
        {children}
      </StyledSpan>
      {!disabled && !loading && <Overlay variant={variant}/>}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["basic", "primary", "accent", "warn"]),
  shape: PropTypes.oneOf(["basic", "raised", "stroked", "flat"]),
  size: PropTypes.oneOf(["x-small", "small", "medium", "large", "x-large"]),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  variant: "basic",
  shape: "basic",
  size: "medium",
  icon: "",
  loading: false,
  disabled: false,
};

export default Button;
export { Button };
