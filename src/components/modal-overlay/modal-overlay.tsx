import { FC } from 'react';
import modalOverlayStyles from './modal-overlay.module.css';

type ModalOverlayPropsType = {
  onClose: () => void;
  isOpen: boolean;
};

const ModalOverlay: FC<ModalOverlayPropsType> =({onClose, isOpen}) => {

  return (
    <div
    className={modalOverlayStyles.modal}
    onClick={e => (e.currentTarget === e.target) && onClose()}
    />
  )
}

export default ModalOverlay;