import React from "react";
import { StyledButton } from "../../style";

export const PrimaryButton = ({ size, color, text, ...props }) => {
  return (
    <StyledButton
      style={{
        padding: size === "large" ? "32px" : "16px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export const DangerButton = (props) => {
  return <PrimaryButton {...props} color="red" />;
};

export const BigSuccessButton = (props) => {
  return <PrimaryButton {...props} size="large" color="green" />;
};
