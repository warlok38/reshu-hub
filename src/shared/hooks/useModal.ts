import { useCallback, useState } from 'react';

export function useModal(isVisible = false) {
  const [isModalVisible, setModalVisible] = useState(isVisible);

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return {
    isModalVisible,
    toggleModal,
    openModal,
    closeModal,
  };
}
