import { FC } from 'react';
import modalOverlayStyles from './modal-overlay.module.css';

type ModalOverlayPropsType = {
  onClose: () => void;
};

const ModalOverlay: FC<ModalOverlayPropsType> =({ onClose }) => {

  return (
    <div
    className={modalOverlayStyles.modal}
    onClick={e => (e.currentTarget === e.target) && onClose()}
    />
  )
}

export default ModalOverlay;