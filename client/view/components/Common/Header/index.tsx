import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
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

//로그인 됐을 때, 안 됐을 때 프로필 사진 달라야 합니다.
//사진 두 개 구해서, svg로 변환 필요.
