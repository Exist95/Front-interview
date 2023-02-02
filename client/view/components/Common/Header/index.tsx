import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { LoginViewModel } from "../../../../vm/LoginViewModel";
import * as S from "./style";

export const Header = () => {
  const { isLogin } = LoginViewModel();
  const navigation = useNavigation<any>();

  return (
    <S.Container>
      <S.Logo
        source={require("../../../../assets/fterview_icon-removebg-preview.png")}
      />
      {isLogin ? (
        <Pressable
          onPress={() => {
            navigation.navigate("MyPage");
          }}
        >
          <S.Profile source={require("../../../../assets/User.png")} />
        </Pressable>
      ) : (
        <S.LoginBox>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <S.LoginText>로그인</S.LoginText>
          </Pressable>
        </S.LoginBox>
      )}
    </S.Container>
  );
};
