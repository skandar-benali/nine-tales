import styled from "styled-components";
import sizes from "../../shared/sizes/fontSizes";

interface Props{
  theme: object;
  size: string;
}

const StyledLabel = styled.label<Props>`
  font-family: ${({theme}) => theme.fontFamily.primary};
  font-weight: 500;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.87);

  user-select: auto;
  cursor: inherit;

  align-items: baseline;
  vertical-align: middle;
  display: inline-flex;
  white-space: nowrap;
  padding: 0 !important;

  ${props => sizes[props.size]}
`;

export default StyledLabel;
