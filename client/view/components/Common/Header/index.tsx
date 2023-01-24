import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text } from "react-native";
import * as S from "./style";

export const Header = () => {
  const navigation = useNavigation<any>();
  return (
    <S.Container>
      <S.Logo
        source={require("../../../../assets/fterview_icon-removebg-preview.png")}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("MyPage");
        }}
      >
        <S.Profile />
      </Pressable>
    </S.Container>
  );
};
