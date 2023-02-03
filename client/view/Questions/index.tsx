import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getQuestions } from "../../model/questionsModel";
import { NavigateLogin } from "../../pages/Auth/NavigateLogin";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { QuestionsViewModel } from "../../vm/QuestionsViewModel";
import * as S from "./style";

export const QuestionsTemp = () => {
  const { isLogin, loginNavigate } = LoginViewModel();
  const { isLoading, data } = useQuery(["AllQuestions"], getQuestions);
  const {
    count,
    nextQuestion,
    resetQuiz,
    qRandomNum,
    aRandomNum,
    setARandomNum,
    selectARandomIndex,
  } = QuestionsViewModel();

  useEffect(() => {
    loginNavigate();
    resetQuiz();
  }, []);

  useEffect(() => {
    if (data) {
      setARandomNum(selectARandomIndex(count - 1));
    }
  }, [count]);

  return (
    <>
      {isLogin && isLoading === false ? (
        <S.Container>
          <S.QContainer>
            <S.Title>Q{count}.</S.Title>
            <S.QContent>{data[qRandomNum[count - 1]]?.question}</S.QContent>
          </S.QContainer>
          <S.AContainer>
            <S.Title>A.</S.Title>
            <S.ScrollView>
              <S.BtnContainer>
                {aRandomNum.map((answerIndex) => {
                  return (
                    <S.Answer
                      key={answerIndex}
                      onPress={() =>
                        nextQuestion(
                          data[qRandomNum[count - 1]],
                          data[qRandomNum[answerIndex]]
                        )
                      }
                    >
                      <S.AContent>
                        {data[qRandomNum[answerIndex]]?.answer}
                      </S.AContent>
                    </S.Answer>
                  );
                })}
              </S.BtnContainer>
            </S.ScrollView>
          </S.AContainer>
        </S.Container>
      ) : (
        <NavigateLogin />
      )}
    </>
  );
};
