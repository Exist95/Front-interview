import React from "react";
import * as S from "./style";

export const NoteList = ({ item }: any) => {
  return (
    <S.ListBox>
      <S.ListPartView>
        <S.ListPart>{item.part}</S.ListPart>
      </S.ListPartView>
      <S.ListQuestion>{item.question}</S.ListQuestion>
      <S.ListAnswerView>
        <S.ListAnswer>{item.answer}</S.ListAnswer>
      </S.ListAnswerView>
    </S.ListBox>
  );
};
