import { Alert } from "react-native";
import { DarkMode } from "./DarkMode/index";
import * as S from "./style";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { Header } from "../components/Common/Header";
import { FormViewModel } from "../../vm/FormViewModel";
import { DeleteUser, getUserName } from "../../model/authModel";
import { useEffect, useState } from "react";
import { NavigateLogin } from "../../pages/Auth/NavigateLogin";
import { useNavigation } from "@react-navigation/native";

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
    if (isLogin) {
      getUserName(userId).then((res) => setUserNickName(res.user.name));
    }
    return;
  }, []);

  return (
    <>
      {isLogin ? (
        <S.Container>
          <Header />
          <S.UserName>{userNickName}</S.UserName>
          <S.PasswordChangeBtn
            onPress={() => {
              navigation.navigate("Password");
            }}
          >
            <S.ButtonText>비밀번호 변경</S.ButtonText>
          </S.PasswordChangeBtn>
          <S.ButtonBox>
            <S.Button>
              <DarkMode />
            </S.Button>
            <S.Button>
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
                <S.ButtonText>로그아웃</S.ButtonText>
              </S.ModalTouchableOpacity>
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
                        },
                      },
                    ]
                  )
                }
              >
                <S.ButtonText>탈퇴하기</S.ButtonText>
              </S.ModalTouchableOpacity>
            </S.Button>
          </S.ButtonBox>
        </S.Container>
      ) : (
        <NavigateLogin />
      )}
    </>
  );
};

//유저 프로필 크기 수정해야 함
