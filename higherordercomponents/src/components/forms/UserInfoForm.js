import React from "react";
import styled from "styled-components";
import { withEditableUser } from "../../HOC/withEditableUser/withEditableUser";
import { withEditableResource } from "../../HOC/withEditableResource/withEditableResource";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: white;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

// This function directly calls the HOC and decontructs the props in the HOC 
export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <Form>
      <Label>
        Name:
        <Input type="text" value={name} onChange={(e) => onChangeUser({ name: e.target.value })} />
      </Label>
      <Label>
        Age:
        <Input type="number" value={age} onChange={(e) => onChangeUser({ age: Number(e.target.value) })} />
      </Label>
      <Label>
        Hair Color:
        <Input type="text" value={hairColor} onChange={(e) => onChangeUser({ hairColor: e.target.value })} />
      </Label>
      <Label>
        Hobbies:
        <Input type="text" value={hobbies.join(", ")} onChange={(e) => onChangeUser({ hobbies: e.target.value.split(", ") })} />
      </Label>
      <Button type="button" onClick={onSaveUser}>
        Save
      </Button>
      <Button type="button" onClick={onResetUser}>
        Reset
      </Button>
    </Form>
  ) : (
    <p>Loading...</p>
  );
}, `/users/123`, 'user');
