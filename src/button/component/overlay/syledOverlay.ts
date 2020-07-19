import styled from "styled-components";

interface Props {
  color:  any
}

const StyledOverlay = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  border-radius: inherit;

  background-position: center;
  transition: background 0.8s;
  opacity: 0.12;

  &:focus, &:hover{
    background: ${({color}) => color.hover} radial-gradient(circle, transparent 1%, ${({color}) => color.hover} 1%) center/15000%;
  }

  &:active {
  background-color: ${({color}) => color.ripple};
  background-size: 100%;
  transition: background 0s;
}
`;

export default StyledOverlay;
