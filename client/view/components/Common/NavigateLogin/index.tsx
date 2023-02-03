import { NavigationButton } from "../NavigationButton";
import { Container } from "../../../Main/style";
import * as S from "./style";

export const NavigateLoginTemp = () => {
  return (
    <Container>
      <S.Text>접근할 수 없는 페이지입니다. 로그인해 주세요!</S.Text>
      <NavigationButton text={"로그인 하러 가기"} destination={"Login"} />
    </Container>
  );
};
