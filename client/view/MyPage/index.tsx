import { useState } from "react";
import {
  Animated,
  Button,
  Pressable,
  TouchableWithoutFeedback,
  Alert,
  Modal,
  Text,
  View,
} from "react-native";
import { DarkMode } from "./DarkMode/index";
import { useNavigation } from "@react-navigation/native";
import * as S from "./style";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { ModalBox } from "../../vm/Modal";

export const MyPageTemp = () => {
  const { isLogin } = LoginViewModel();
  const { onClickModal, isModalVisible, setIsModalVisible } = ModalBox();

  const navigation = useNavigation<any>();

  return (
    <S.Container>
      {isLogin ? (
        <S.UserName>유저네임</S.UserName>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <S.UserName>로그인 해주세요</S.UserName>
        </Pressable>
      )}
      {isLogin && <S.Profile source={require("../../assets/User.png")} />}
      <S.ButtonBox>
        <S.Button>
          <DarkMode />
        </S.Button>
        <S.Button>
          {isLogin ? (
            <S.RankingBox>랭킹{"\n"}1위</S.RankingBox>
          ) : (
            <S.RankingBox>랭킹{"\n"}-위</S.RankingBox>
          )}
        </S.Button>
      </S.ButtonBox>
      {/* <Button title="모달 버튼" onPress={onClickModal} /> */}
      {/* <Modal
        visible={isModalVisible}
        animationType={"slide"}
        transparent={true}
        statusBarTranslucent={true}
      >
        <S.ModalOverlay onPress={() => setIsModalVisible(!isModalVisible)}>
          <TouchableWithoutFeedback>
            <S.bottomSheetContainer>
              <View>
                <Text>회원을 탈퇴하시겠습니까?</Text> */}
      <S.ModalTouchableOpacity
        onPress={() =>
          Alert.alert(
            "탈퇴 의사 재확인",
            "탈퇴하시겠습니까? \n 한 번 탈퇴한 계정은 복구할 수 없습니다.",
            [{ text: "취소" }, { text: "확인" }]
            //확인 옆에 onPress 넣어서 계정 탈퇴 axios 보내기
          )
        }
      >
        <Text>버튼을 탭하여 탈퇴하기</Text>
      </S.ModalTouchableOpacity>
      {/* </View>
            </S.bottomSheetContainer>
          </TouchableWithoutFeedback>
        </S.ModalOverlay>
      </Modal> */}
    </S.Container>
  );
};

//유저 프로필 크기 수정해야 함
