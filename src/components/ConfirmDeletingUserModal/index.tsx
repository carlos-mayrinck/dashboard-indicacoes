import Modal from "react-modal";
import closeImg from "../../assets/img/close.svg"

import { Container } from "./styles";

interface ConfirmDeletingUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRequestDelete: () => void;
}

export function ConfirmDeletingUserModal({ isOpen, onRequestClose, onRequestDelete }: ConfirmDeletingUserModalProps) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-container"
    >
      <Container>
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Fechar" />
        </button>

        <h2>Tem certeza que deseja deletar esse usuário?</h2>
        <div>
          <button type="button" onClick={onRequestDelete}>Sim</button>
          <button type="button" onClick={onRequestClose}>Não</button>
        </div>
      </Container>
    </Modal>
  );
}