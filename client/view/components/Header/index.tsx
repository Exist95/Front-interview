import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { Container, Profile } from "./style";

const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <Text>logo</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("MyPage");
        }}
      >
        <Profile />
      </Pressable>
    </Container>
  );
};

export default Header;
