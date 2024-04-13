import React, { useState } from "react";
import GraphView from "./components/graph-view";
import Modal from "./components/modal";
import './main.css';

export default function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalDescription, setModalDescription] = useState<string>('');
  const [modalImagePath, setModalImagePath] = useState<string>('');

  return (
    <>
      <GraphView
        handleActive={setModalActive}
        handleTitle={setModalTitle}
        handleDescription={setModalDescription}
        handleImagePath={setModalImagePath}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={modalTitle}
        description={modalDescription}
        imagePath={modalImagePath}
      />
    </>
  );
};
