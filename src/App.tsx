import { useState } from "react";
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
        setActive={setModalActive}
        setTitle={setModalTitle}
        setDescription={setModalDescription}
        setImagePath={setModalImagePath}
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
