
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

import { Container, ContentContainer } from "./styles";
import { useIndications } from "../../hooks/useIndications";

interface IndicationDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function IndicationDetailsModal({ isOpen, onRequestClose }: IndicationDetailsModalProps) {

  const { indication } = useIndications();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <AiOutlineClose />
      </button>

      <Container>
        <h2>Detalhes</h2>

        <ContentContainer>
          <strong>{ indication.name }</strong>
          <p>{ indication.email }</p>
          <p>{ indication.company }</p>
          <p>{ indication.ambassador }</p>
          <p>{ indication.product }</p>
        </ContentContainer>
      </Container>
    </Modal>
  );
}