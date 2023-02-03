import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import {
  answersArrState,
  aRandomNumState,
  countState,
  qRandomNumState,
  scoreState,
  wrongAnswersArrState,
} from "../store/questions";
import { IQuestionRes } from "../types/Questions";

export const QuestionsViewModel = () => {
  const [count, setCount] = useRecoilState(countState);
  const [score, setScore] = useRecoilState(scoreState);
  const [qRandomNum, setQRandomNum] = useRecoilState(qRandomNumState);
  const [aRandomNum, setARandomNum] = useRecoilState(aRandomNumState);
  const [answersArr, setAnswersArr] = useRecoilState(answersArrState);
  const [wrongAnswersArr, setWrongAnswersArr] =
    useRecoilState(wrongAnswersArrState);

  const navigation = useNavigation<any>();

  const onPressCountUp = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    if (count === 10) {
      navigateResult();
    }
  };

  const scoreUp = () => {
    setScore(score + 1);
  };

  const nextQuestion = (
    question: IQuestionRes,
    selectedQuestion: IQuestionRes
  ) => {
    onPressCountUp();
    if (question?.answer === selectedQuestion?.answer) scoreUp();
    else {
      setWrongAnswersArr((prev) => [
        ...prev,
        {
          question: question?.question,
          answer: question?.answer,
          part: question?.part,
        },
      ]);
    }
  };

  const resetQuiz = () => {
    setCount(1);
    setScore(0);
  };

  const navigateResult = () => {
    navigation.navigate("Result");
  };

  const selectQRandomIndex = (totalIndex: number, selectNumber: number) => {
    let randomIndexArray = [];
    let randomNum;
    for (let i = 0; i < selectNumber; i++) {
      randomNum = Math.floor(Math.random() * totalIndex);
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum);
      } else {
        i--;
      }
    }
    return randomIndexArray;
  };

  const selectARandomIndex = (answerIndex: number) => {
    let randomIndexArray = [answerIndex];
    let randomNum;
    for (let i = 0; i < 3; i++) {
      randomNum = Math.floor(Math.random() * 10);
      if (
        randomIndexArray.indexOf(randomNum) === -1 &&
        randomNum !== answerIndex
      ) {
        randomIndexArray.push(randomNum);
      } else {
        i--;
      }
    }
    return shuffle(randomIndexArray);
  };

  const shuffle = (array: number[]) => {
    for (let index = array.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
    return array;
  };

  return {
    count,
    qRandomNum,
    aRandomNum,
    answersArr,
    score,
    wrongAnswersArr,
    resetQuiz,
    selectQRandomIndex,
    setQRandomNum,
    setARandomNum,
    selectARandomIndex,
    nextQuestion,
  };
};
