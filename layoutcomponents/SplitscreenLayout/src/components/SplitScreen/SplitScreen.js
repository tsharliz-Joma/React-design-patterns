import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

// Styled component, This is a component that has these styles applied to it from the get go
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;
// Define the component
export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
