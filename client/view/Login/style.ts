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

export { LoginTitle, LoginText };
