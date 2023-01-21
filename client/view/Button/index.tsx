import React from "react";
import { BtnContainer, BtnText } from "./style";

const Button = () => {
  return (
    <BtnContainer style={{ bottom: 170, right: 20 }}>
      <BtnText>문제 풀러 가기</BtnText>
    </BtnContainer>
  );
};

export default Button;
