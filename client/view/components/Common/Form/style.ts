import styled from "styled-components/native";

const Input = styled.TextInput`
  width: 100%;
  height: 7%;
  background-color: #e5e5e5;
  border-radius: 30%;
  margin-bottom: 5%;
  padding-left: 8%;
  position: relative;
`;

const FormText = styled.Text`
  color: ${(props) => props.theme.textColor};
  padding-left: 2%;
  margin-bottom: 4%;
  margin-top: 1%;
  width: 100%;
`;

const Invalid = styled.View`
  margin-bottom: 4%;
  margin-top: 1%;
  width: 100%;
`;

export { Input, FormText, Invalid };
