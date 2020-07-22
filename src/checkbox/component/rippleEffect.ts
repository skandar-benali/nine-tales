import styled from "styled-components";

interface Props {
  color: string
}

const RippleEffect = styled.div<Props>`
  width: 40px;
  height: 40px;
  background: ${({color}) => color};
  opacity: 0;
  transition: opacity 0.8s;
`;

export default RippleEffect;
