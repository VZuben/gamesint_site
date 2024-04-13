import React from "react";
import { ModalProps } from "../interfaces/modal-props";

export default function Modal({
  active,
  setActive,
  title,
  description,
  imagePath
}: ModalProps) {
  if (!active) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-70 flex justify-center items-center"
      onClick={() => setActive(false)}
    >
      <div className="bg-white rounded-lg w-3/4 md:max-w-md mx-auto p-6 relative">
        <button
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={() => setActive(false)}
        >
          Fechar
        </button>
        <div className="flex justify-center items-center mb-4">
          <img src={imagePath} alt="" className="max-w-full h-auto" />
        </div>
        <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
};