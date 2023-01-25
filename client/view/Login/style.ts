import styled from "styled-components/native";

const LoginTitle = styled.Text`
  font-size: 50%;
  color: ${(props) => props.theme.accentColor};
  margin-bottom: 10%;
  font-weight: 300;
`;

const FormContainer = styled.View`
  flex: 1;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 7%;
  background-color: #e5e5e5;
  border-radius: 30%;
  margin-bottom: 5%;
  padding-left: 12%;
  position: relative;
`;

const LoginText = styled.Text`
  color: ${(props) => props.theme.textColor};
  position: absolute;
  bottom: 150;
`;

export { LoginTitle, Input, LoginText, FormContainer };
