import styled from "styled-components/native";

export const RankingContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20% 5%;
  align-items: center;
`;

export const RankingTitle = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  font-size: 40px;
  align-items: center;
  text-align: center;
  flex: 2;
`;

export const RankingTable = styled.View`
  border: 2px solid ${(props) => props.theme.textColor};
  width: 300px;
  height: 400px;
  overflow-y: scroll;
`;

export const RankingRankBox = styled.View`
  color: ${(props) => props.theme.textColor};
`;
