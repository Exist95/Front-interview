import * as S from "./style";
import { RankingList } from "./RankingList";
import { useState, useEffect } from "react";
import { IUserRes } from "../../types/Users";
import { getUsers } from "../../model/rankingModel";

export const RankingTemp = () => {
  const userData: any[] = [];
  const [filterUserData, setFilterUserData]: any[] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((res) => {
      res.data.users.forEach((el: IUserRes) => {
        const userInfo = {
          name: el.name,
          id: el.id,
          totalPoint: el.totalPoint,
        };
        userData.push(userInfo);
      });
      for (let i = 0; i < userData.length; i++) {
        const filter = userData.filter((el) => el.totalPoint >= 0);
        filter.sort((a, b) => {
          if (a.totalPoint < b.totalPoint) return 1;
          if (a.totalPoint > b.totalPoint) return -1;
          return 0;
        });
        setFilterUserData(filter);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <S.RankingContainer>
      {!isLoading ? (
        <>
          <S.RankingTitle>랭킹 TOP 10</S.RankingTitle>
          <S.RankingTable>
            <S.RankingRankBox>
              <RankingList filterUserData={filterUserData} />
            </S.RankingRankBox>
          </S.RankingTable>
        </>
      ) : (
        <S.LoadingSpinner />
      )}
    </S.RankingContainer>
  );
};
