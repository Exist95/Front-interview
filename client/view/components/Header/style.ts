import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Profile = styled.View`
  width: 60;
  height: 60;
  border-radius: 30;
  background-color: gray;
  margin-right: 10%;
`;

export { Container, Profile };
