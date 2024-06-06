import React, { useState } from "react";
import Container from "../components/ui/Container";
import Button from "../utils/Button";
import Modal from "../components/ui/Modal";

const Test = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <h1>Test</h1>
      <h2>test</h2>
      <Button
        onClick={() => setModal((prev) => !prev)}
        className="w-full"
        variant="primary"
      />
      <Modal isOpen={modal} onClose={handleModalClose}>
        <Modal.CloseButton />
        <h1>This is modal</h1>
      </Modal>
    </Container>
  );
};

export default Test;
