import styled from "styled-components/native";

export const ListBox = styled.View`
  width: 100%;
  border: 1px solid ${(props) => props.theme.textColor};
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const ListQuestion = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

export const ListAnswer = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
`;

export const ListPart = styled.Text`
  font-size: 10px;
  color: ${(props) => props.theme.textColor};
`;
