import { StatusBar } from "expo-status-bar";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Header } from "../components/Common/Header";
import * as S from "./style";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MainTemp = () => {
  const navigation = useNavigation<any>();
  return (
    <S.Container>
      <Header />
      <S.SubTitle>내 귀에</S.SubTitle>
      <S.AnimationBox>
        <S.MainTitle>프터뷰</S.MainTitle>
      </S.AnimationBox>
      <NavigationButton text={"문제 풀러가기"} destination={"Questions"} />
      <StatusBar style="light" />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>로그인</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text>회원가입</Text>
      </Pressable>
    </S.Container>
  );
};
