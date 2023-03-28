import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--font-size": `1rem`,
    "--border-radius": `2px`,
    "--padding": `4px 12px`
  },
  medium: {
    "--font-size": `1.125rem`,
    "--border-radius": `2px`,
    "--padding": `12px 20px`
  },
  large: {
    "--font-size": `1.3125rem`,
    "--border-radius": `4px`,
    "--padding": `16px 32px`
  }
};

const Button = ({ variant, size, children, ...delegated }) => {
  const sizeStyles = SIZES[size];

  if (variant === "fill")
    return (
      <FillButton style={sizeStyles} {...delegated}>
        {children}
      </FillButton>
    );
  if (variant === "outline")
    return (
      <OutlineButton style={sizeStyles} {...delegated}>
        {children}
      </OutlineButton>
    );
  if (variant === "ghost")
    return (
      <GhostButton style={sizeStyles} {...delegated}>
        {children}
      </GhostButton>
    );

  throw new Error(
    `unrecognised Button variant: ${variant}. Acceptable options include "fill", "outline", & "ghost".`
  );
};

const Base = styled.button`
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  font-size: var(--font-size);
  padding: var(--padding);
  border-radius: var(--border-radius);
  border: 2px solid transparent;

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

const FillButton = styled(Base)`
  background: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background: ${COLORS.primaryLight};
  }

  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const OutlineButton = styled(Base)`
  background: ${COLORS.white};
  border: 2px solid currentColor;
  color: ${COLORS.primary};

  &:hover {
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(Base)`
  background: transparent;
  border: none;
  color: ${COLORS.gray};

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;
