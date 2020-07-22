import styled from "styled-components";
import sizes from "../../shared/sizes/sizes";

interface Props {
  variant: string;
  size: string
  checked: boolean;
  defaultChecked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  theme: object;
}

const StyledCase = styled.input<Props>`
  -webkit-appearance: none;
  -moz-appearance: none;

  position: relative;
  display: inline-block;
  line-height: 0;
  margin-right: 8px;
  order: 0;
  vertical-align: middle;
  white-space: nowrap;
  flex-shrink: 0;

  clip: rect(0 0 0 0);

  //overflow: hidden;
  padding: 0;
  outline: none;

  box-sizing: border-box;
  background-color: transparent;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
  border-color: rgba(0,0,0,.54);
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;

  &:checked {
    border: none;
    background-color: ${({theme, variant}) => theme.colors[variant]};
    &:after {
      display: flex;
      justify-content: center;
      align-items: center;
      ${({size}) => sizes[size]};
      content: "✓";
      color: white;
    }
    &:before {
      content: '';
      border-radius: 50%;
      background-color: ${({theme, variant}) => theme.colors[variant]};
      position: absolute;
      box-sizing: border-box;
      top: 50%;
      left: 50%;
      transform: scale(0);
      width: 1.8px;
      height: 1.8px;
      z-index: -1;
      animation: ripple 0.8s ease-out;
    }
  }
  //:not(:checked) {
  //opacity: 0.1;
  //}
  ${({size}) => sizes[size]}
    @keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 0.1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}
`;

export default StyledCase;
