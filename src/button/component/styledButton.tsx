import styled from "styled-components";
import shapes from "./shapes";
import sizes from "../../shared/sizes/fontSizes";

interface Props {
  variant: string;
  shape: string;
  size: string;
  disabled: boolean;
  loading: boolean;
  theme: any;
}

const StyledButton = styled.button<Props>`
  font-family: ${props => props.theme.fontFamily.primary};
  font-weight: 500;
  line-height: 1.2;

  box-sizing: border-box;
  position: relative;
  display: inline-block;

  user-select: none;
  cursor: pointer;
  outline: none;

  margin: 0;
  padding: 0 16px;
  overflow: visible;

  white-space: nowrap;
  text-decoration: none;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0;
  text-shadow: none;

  border-radius: 4px;

  ${props => shapes[props.shape]}
  ${props => sizes[props.size]}
`;

export default StyledButton;
