import React, { useState } from "react";
import GraphView from "./components/graph-view";
// import Modal from "./components/modal";
import './main.css';
import { GraphViewProps } from "./components/graph-view";


function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalImagePath, setModalImagePath] = useState('');

  function handleActive(isActive: boolean) {
    setModalActive(isActive)
  }
  function handleTitle(title: string) {
    setModalTitle(title)
  }
  function handleModalDescription(content: string) {
    setModalDescription(content);
  }
  return (
    <>
      <GraphView handleActive={handleActive} handleTitle={handleTitle} handleDescription={handleModalDescription} handleImagePath={() => setModalImagePath(modalImagePath)} />
      <>
        {
          modalActive &&
          <>
            <div id="overlay" className="w-screen h-screen absolute top-0 bg-black opacity-70 flex items-center justify-center" onClick={() => setModalActive(!modalActive)} />

            <div className="p-4 bg-slate-100 rounded-md min-w-[42rem] min-h-[28rem] flex absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
              <span className="w-full font-bold text-xl text-center">{modalTitle}</span>
              <div>
                <img src={modalImagePath} alt="" />
                <span className="mt-2 ">
                  {modalDescription}
                </span>
              </div>
            </div>
          </>
        }
      </>
    </>
  );
}

export default App;
