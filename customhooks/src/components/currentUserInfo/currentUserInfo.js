import styled from "styled-components";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const UserContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 8px;
`;

const UserDetail = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 8px;
`;

const UserHobbiesTitle = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 8px;
`;

const UserHobbiesList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const UserHobby = styled.li`
  font-size: 1em;
  color: #666;
  margin-bottom: 4px;
`;

export const CurrentUserInfo = () => {
  const user = useCurrentUser();
  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <UserContainer>
      <UserName>{name}</UserName>
      <UserDetail>Age: {age} years</UserDetail>
      <UserDetail>Hair Color: {hairColor}</UserDetail>
      <UserHobbiesTitle>Hobbies:</UserHobbiesTitle>
      <UserHobbiesList>
        {hobbies.map((hobby) => (
          <UserHobby key={hobby}>{hobby}</UserHobby>
        ))}
      </UserHobbiesList>
    </UserContainer>
  ) : (
    <p>Loading...</p>
  );
};
