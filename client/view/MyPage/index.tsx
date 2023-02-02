import { Alert, Text } from "react-native";
import { DarkMode } from "./DarkMode/index";
import { useNavigation } from "@react-navigation/native";
import * as S from "./style";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { Header } from "../components/Common/Header";
import { FormViewModel } from "../../vm/FormViewModel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { DeleteUser } from "../../model/authModel";
import { usersToken } from "../../store/login";
import { useRecoilState } from "recoil";

export const MyPageTemp = () => {
  const { isLogin, setIsLogin, setUserId, removeToken, userToken } =
    LoginViewModel();
  const { userId } = FormViewModel();
  // const navigation = useNavigation<any>();
  console.log(userId);
  console.log(userToken);
  return (
    <S.Container>
      <Header />
      <S.UserName>유저네임</S.UserName>
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
                    onPress: () => DeleteUser(userId, userToken),
                  },
                ]
                //확인 옆에 onPress 넣어서 계정 탈퇴 axios 보내기
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
                    setIsLogin(false), setUserId(""), removeToken;
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
  );
};

//유저 프로필 크기 수정해야 함
