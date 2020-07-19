import styled, { css } from "styled-components";
import sizes from "../../shared/sizes/sizes";

interface Props {
  variant: string;
  size: string;
  disabled: boolean,
  theme: any;
}

const focusEffect = css<Props>`
  &:focus-within {
    border-color: ${({theme, variant}) => theme.colors[variant]};
    transition: border-bottom-color 0.5s;
  }
`;

const StyledInput = styled.input<Props>`
    font-family: ${props => props.theme.fontFamily.primary};
    font-weight: 400;

    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0,0, 0, 0.1);

    position: relative;
    margin: 0;
    width: 100%;
    max-width: 100%;

    vertical-align: bottom;
    text-align: inherit;

    ${props => sizes[props.size]}
    ${({disabled}) => !disabled && focusEffect}
`;

export default StyledInput;
