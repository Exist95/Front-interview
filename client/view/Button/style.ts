import styled from "styled-components/native";

const BtnContainer = styled.TouchableOpacity`
  width: 40%;
  height: 8%;
  border-radius: 8%;
  background-color: #ff8dc7;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  color: black;
  font-size: 18;
  font-weight: 400;
`;

export { BtnContainer, BtnText };
