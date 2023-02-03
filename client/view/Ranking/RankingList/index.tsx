import React from "react";
import { IUserFilter } from "../../../types/Users";
import * as S from "./style";

export const RankingList = ({ filterUserData }: IUserFilter) => {
  return (
    <S.RankingScrollView>
      <S.RankingRanked>
        {filterUserData?.map((x: any, index) => {
          return (
            <S.RankingUser key={index}>
              <S.RankingUserName>{x.name}</S.RankingUserName>
              <S.RankingNumber>{x.totalPoint}점</S.RankingNumber>
            </S.RankingUser>
          );
        })}
      </S.RankingRanked>
    </S.RankingScrollView>
  );
};
