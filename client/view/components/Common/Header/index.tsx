import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable } from "react-native";
import * as S from "./style";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
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
