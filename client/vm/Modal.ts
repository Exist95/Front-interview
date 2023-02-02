import React, { useState } from "react";

export const ModalBox = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onClickModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return { onClickModal, isModalVisible, setIsModalVisible };
};
