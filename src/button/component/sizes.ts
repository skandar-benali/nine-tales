import { css } from "styled-components";

const buttonSizes = {
  "x-small": css`
    line-height: 1.2;
    font-size: 0.6875rem;
    padding: 2px 8px;
  `,
  "small": css`
    line-height: 1.2;
    font-size: 0.875rem;
    padding: 4px 10px;
  `,
  "medium": css`
    line-height: 1.2;
    font-size: 1rem;
    padding: 6px 16px;
  `,
  "large": css`
    line-height: 1.2;
    font-size: 1.125rem;
    padding: 8px 15px
  `,
  "x-large": css`
    line-height: 1.2;
    font-size: 1.25rem;
    padding: 12px 22px;
  `
};
export default buttonSizes;
