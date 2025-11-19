import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const openModal = (item) => {
    setData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setData(null);
  };

  return { isOpen, data, openModal, closeModal };
}
