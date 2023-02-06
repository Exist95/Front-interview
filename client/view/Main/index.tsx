import { StatusBar } from "expo-status-bar";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Header } from "../components/Common/Header";
import * as S from "./style";
import { Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";

export const MainTemp = () => {
  const minititle = useRef(new Animated.Value(0)).current;
  const maintitle = useRef(new Animated.Value(0)).current;
  const minititleList = [
    "내 귀에",
    "기술면접 완전 정복",
    "프론트의, 프론트에 의한, 프론트를 위한",
    "프론트 A to Z",
  ];

  const randomTitle =
    minititleList[Math.floor(Math.random() * minititleList.length)];

  const LongfadeIn = () => {
    Animated.timing(minititle, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const ShortFadeIn = () => {
    Animated.timing(maintitle, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    LongfadeIn();
    ShortFadeIn();
  }, []);

  return (
    <S.Container>
      <Header />
      <S.AnimationContainer>
        <Animated.View style={{ opacity: minititle }}>
          <S.SubTitle>{randomTitle}</S.SubTitle>
        </Animated.View>
        <Animated.View
          style={{
            opacity: maintitle,
          }}
        >
          <S.MainTitle>프터뷰</S.MainTitle>
        </Animated.View>
      </S.AnimationContainer>
      <NavigationButton text={"문제 풀러가기"} destination={"Questions"} />
      <StatusBar style="light" />
    </S.Container>
  );
};
