import styled from "./Modal.module.css";
import { Photo } from "../../types/photo";

interface ModalProps [
  children: React.ReactMode;
  onClose: () => void;
]

export default function Modal({children}: ModalProps) {
  return (
    <div className={styled.backdrop} role="dialog" aria-modal="true">
      <div className={styled.modal}>
        <button className={styled.closeButton} aria-label="Close modal">
          &times;
        </button>
        {/* children */}
      </div>
    </div>
  );
}
