import styled from "styled-components/native";

export const RankingRanked = styled.View`
  color: ${(props) => props.theme.textColor};
  display: flex;
  width: 100%;
  align-items: center;
`;

export const RankingScrollView = styled.ScrollView``;

export const RankingUser = styled.View`
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.textColor};
  padding: 5px 0;
  overflow-x: hidden;
`;

export const RankingUserName = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 25px;
`;

export const RankingNumber = styled.Text`
  color: red;
  align-items: center;
`;
