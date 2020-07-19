import { css } from "styled-components";

interface Props {
  variant: string;
  theme: any;
}

const buttonShapes = {
  basic: css<Props>`
    background-color: transparent;
    background-position: center;
    transition: background 0.8s;
    border: none;
    color: ${({theme, variant}) => theme.colors[variant]};
    &:disabled {
      color: rgba(0,0,0,.26);
      cursor: default;
    }
`,
  raised: css<Props>`
    background-color: ${({theme, variant}) => variant === "basic" ? theme.white : theme.colors[variant]};
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    border: none;
    color: ${({theme, variant}) => variant === "basic" ? theme.black : theme.white};
    &:disabled {
      color: rgba(0,0,0,.26);
      background-color: rgba(0,0,0,.12);
      cursor: default;
    }
`,
  stroked: css<Props>`
    background-color: ${({theme}) => theme.white};
    border: 1px solid rgba(0,0,0,.12);
    color: ${({theme, variant}) => theme.colors[variant]};
    &:disabled {
      color: rgba(0,0,0,.26);
      cursor: default;
    }
`,
  flat: css<Props>`
    background-color: ${({theme, variant}) => theme.colors[variant]};
    color: ${({theme}) => theme.white};
    border: none;
    color: ${({theme, variant}) => variant === "basic" ? theme.black : theme.white};
    &:disabled {
      color: rgba(0,0,0,.26);
      background-color: rgba(0,0,0,.12);
      cursor: default;
    }
`
};

export default buttonShapes;
