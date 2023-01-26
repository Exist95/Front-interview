import React from "react";
import * as S from "./style";

export const NoteList = ({ item }: any) => {
  return (
    <S.ListBox>
      <S.ListQuestion>{item.question}</S.ListQuestion>
      <S.ListAnswer>{item.answer}</S.ListAnswer>
      <S.ListPart>{item.part}</S.ListPart>
    </S.ListBox>
  );
};
