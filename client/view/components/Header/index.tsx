import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import * as S from "./style";

const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <S.Container>
      <Text>logo</Text>
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

export default Header;
