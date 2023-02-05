import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.bgColor};
  height: 100%;
  align-items: center;
  padding: 20% 5%;
`;

export const TextBox = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoteTitle = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
`;

export const NotePoint = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
`;

export const NoteTable = styled.ScrollView`
  border: 2px solid ${(props) => props.theme.textColor};
  width: 300px;
  height: 100%;
  box-sizing: content-box;
`;

export const ListQuestionScrollView = styled.ScrollView``;
