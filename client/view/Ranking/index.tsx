import * as S from "./style";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RankingList } from "./RankingList";
import { useState, useEffect } from "react";
import { IUserRes } from "../../types/Users";
import { getUsers } from "../../model/rankingModel";

export const RankingTemp = () => {
  const userData: any[] = [];
  const [filterUserData, setFilterUserData]: any[] = useState([]);

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
      }
    });
  }, []);

  // const { data, isLoading } = useQuery(["getUser"], () =>
  //   axios.get(`https://fterview.du.r.appspot.com/api/users`)
  // );
  // if (!isLoading) {
  //   data?.data.users.forEach((el: any) => {
  //     const userInfo = {
  //       name: el.name,
  //       id: el.id,
  //       totalPoint: el.totalPoint,
  //     };
  //     userData.push(userInfo);
  //   });
  //   for (let i = 0; i < userData.length; i++) {
  //     const filter = userData.filter((el) => el.totalPoint >= 0);
  //     filter.sort((a, b) => {
  //       if (a.totalPoint < b.totalPoint) return 1;
  //       if (a.totalPoint > b.totalPoint) return -1;
  //       return 0;
  //     });
  //     setFilterUserData(filter);
  //   }
  // }

  // console.log("asdasd", userData);

  return (
    <S.RankingContainer>
      <S.RankingTitle>랭킹 TOP 10</S.RankingTitle>
      <S.RankingTable>
        <S.RankingRankBox>
          <RankingList filterUserData={filterUserData} />
        </S.RankingRankBox>
      </S.RankingTable>
    </S.RankingContainer>
  );
};
