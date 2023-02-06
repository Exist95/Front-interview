import styled from "styled-components/native";

export const ListBox = styled.View`
  width: 100%;
  height: 140px;
  border: 1px solid ${(props) => props.theme.textColor};
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  padding: 0 10px;
  border-radius: 5px;
`;

export const ListQuestion = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

export const ListAnswer = styled.Text`
  font-size: 15px;
  color: red;
`;

export const ListAnswerView = styled.View`
  display: flex;
  position: absolute;
  bottom: 5px;
`;

export const ListPart = styled.Text`
  font-size: 10px;
  color: ${(props) => props.theme.textColor};
`;

export const ListPartView = styled.View`
  display: flex;
  position: absolute;
  top: 1px;
`;
