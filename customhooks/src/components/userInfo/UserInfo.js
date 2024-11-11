import styled from "styled-components";
import { useUser } from "../../hooks/useUser";

const VibrantUserContainer = styled.div`
  background-color: #e1bee7;
  border: 2px solid #8e24aa;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const VibrantUserName = styled.h3`
  font-size: 1.8em;
  color: #d32f2f;
  margin-bottom: 10px;
`;

const VibrantUserDetail = styled.p`
  font-size: 1.4em;
  color: #1976d2;
  margin-bottom: 10px;
`;

const VibrantUserHobbiesTitle = styled.h3`
  font-size: 1.4em;
  color: #388e3c;
  margin-bottom: 10px;
`;

const VibrantUserHobbiesList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const VibrantUserHobby = styled.li`
  font-size: 1.2em;
  color: #f57c00;
  margin-bottom: 6px;
`;

export const UserInfo = ({ userId }) => {
  const user = useUser(userId);
  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <VibrantUserContainer>
      <VibrantUserName>{name}</VibrantUserName>
      <VibrantUserDetail>Age: {age} years</VibrantUserDetail>
      <VibrantUserDetail>Hair Color: {hairColor}</VibrantUserDetail>
      <VibrantUserHobbiesTitle>Hobbies:</VibrantUserHobbiesTitle>
      <VibrantUserHobbiesList>
        {hobbies.map((hobby) => (
          <VibrantUserHobby key={hobby}>{hobby}</VibrantUserHobby>
        ))}
      </VibrantUserHobbiesList>
    </VibrantUserContainer>
  ) : (
    <p>Loading...</p>
  );
};
