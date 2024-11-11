import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${(props) => (props.size === 'large' ? '32px' : '16px')};
  font-size: ${(props) => (props.size === 'large' ? '32px' : '16px')};
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 5px 0;
`;

export const UnorderedList = styled.ul`
  padding-left: 20px;
`;