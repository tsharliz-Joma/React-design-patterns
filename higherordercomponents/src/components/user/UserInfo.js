import React from "react";
import styled, { keyframes } from "styled-components";

const UserInfoContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  margin: 10px 0;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.secondary};
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <UserInfoContainer>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </UserInfoContainer>
  ) : (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};
