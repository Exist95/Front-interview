import { Alert, Text } from "react-native";
import { DarkMode } from "./DarkMode/index";
import { useNavigation } from "@react-navigation/native";
import * as S from "./style";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { Header } from "../components/Common/Header";
import { FormViewModel } from "../../vm/FormViewModel";
import { DeleteUser, getUserName } from "../../model/authModel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_PATH } from "@env";
import { Login } from "../../pages/Auth/Login";
import { useEffect, useState } from "react";

export const MyPageTemp = () => {
  const {
    isLogin,
    setIsLogin,
    setUserId,
    removeToken,
    userToken,
    setUserToken,
  } = LoginViewModel();
  const { userId } = FormViewModel();
  const [userNickName, setUserNickName] = useState("");

  const navigation = useNavigation<any>();
  useEffect(() => {
    getUserName(userId).then((res) => setUserNickName(res.user.name));
  }, []);

  //탈퇴를 하면 여전히 useQuery 데이터가 남아있는 문제가 발생 && 화면 전환 안 됨.

  return (
    <>
      {isLogin ? (
        <S.Container>
          <Header />
          <S.UserName>{userNickName}</S.UserName>
          <S.ButtonBox>
            <S.Button>
              <DarkMode />
            </S.Button>
            <S.Button>
              <S.ModalTouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "탈퇴 재확인",
                    "한 번 탈퇴한 계정은 복구할 수 없습니다.",
                    [
                      { text: "취소" },
                      {
                        text: "확인",
                        onPress: () => {
                          DeleteUser(userId, userToken),
                            setIsLogin(false),
                            removeToken,
                            setUserId(""),
                            setUserToken("");
                          // navigation.navigate("Main");
                        },
                      },
                    ]
                  )
                }
              >
                <Text>탈퇴하기</Text>
              </S.ModalTouchableOpacity>
              <S.ModalTouchableOpacity
                onPress={() =>
                  Alert.alert("로그아웃 재확인?", "로그아웃 하시겠습니까?", [
                    { text: "취소" },
                    {
                      text: "확인",
                      onPress: () => {
                        setIsLogin(false),
                          setUserId(""),
                          removeToken,
                          setUserToken("");
                      },
                    },
                  ])
                }
              >
                <Text>로그아웃</Text>
              </S.ModalTouchableOpacity>
            </S.Button>
          </S.ButtonBox>
        </S.Container>
      ) : (
        <Login />
      )}
    </>
  );
};

//유저 프로필 크기 수정해야 함
