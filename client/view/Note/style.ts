import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.bgColor};
  height: 100%;
  align-items: center;
  padding: 20% 5%;
`;

export const TextBox = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoteTitle = styled.Text`
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
`;

export const NotePoint = styled.Text`
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
`;

export const NoteTable = styled.ScrollView`

  gap: 10px;
  width: 300px;
  height: 1000px;
`;

export const ListQuestionScrollView = styled.ScrollView``;

export const LoadingSpinner = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
`;





