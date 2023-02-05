import styled from "styled-components/native";

const LoginTitle = styled.Text`
  font-size: 45%;
  color: ${(props) => props.theme.accentColor};
  margin-bottom: 10%;
  font-weight: 300;
`;

const LoginText = styled.Text`
  color: ${(props) => props.theme.textColor};
  margin-top: 60px;
`;

const SubManuBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const SaveId = styled.Text``;
const ChangePassword = styled.Text``;

export { LoginTitle, LoginText, SubManuBox, SaveId, ChangePassword };
