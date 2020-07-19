import React from "react";
import PropTypes from "prop-types";
import colors from "../../theme/colorsPalette";

import StyledOverlay from "./syledOverlay";

const effectColors = (variant: string): object => {
  let color = {};
  switch (variant) {
    case "basic": color = {
      hover: colors.gray["400"],
      ripple: colors.gray["600"]
    }; break;
    case "primary": color = {
      hover: colors.indigo["200"],
      ripple: colors.indigo["400"]
    }; break;
    case "accent": color = {
      hover: colors.pink["200"],
      ripple: colors.pink["400"]
    }; break;
    case "warn": color = {
      hover: colors.red["200"],
      ripple: colors.red["400"]
    }; break;
    default: color = {
      hover: colors.gray["400"],
      ripple: colors.gray["600"]
    };

  }
  return color;
};

const Overlay = (props: { variant: string }) => {
  return (
    <StyledOverlay color={effectColors(props.variant)}/>
  );
};

Overlay.propTypes = {
  variant: PropTypes.string.isRequired
};

Overlay.defaultProps = {
  variant: PropTypes.string
};

export default Overlay;
