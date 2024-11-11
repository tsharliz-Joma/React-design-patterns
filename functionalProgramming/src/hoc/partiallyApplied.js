import { StyledButton } from "../style";

export const partiallyApplied = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const SecondaryButton = ({ size, color, text, ...props }) => {
  return (
    <StyledButton size={size} color={color} {...props}>
      {text}
    </StyledButton>
  );
};

export const SecondaryDangerButton = partiallyApplied(SecondaryButton, { color: "red" });
export const SecondarySuccessButton = partiallyApplied(SecondaryButton, { color: "green", size: "large" });
