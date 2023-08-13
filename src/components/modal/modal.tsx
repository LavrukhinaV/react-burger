import modalStyles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { FC, PropsWithChildren, useEffect } from "react";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modals") as Element | DocumentFragment;

type ModalPropsType = {
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<ModalPropsType>> = ({ children, onClose }) => {

  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if(evt.key === 'Escape') {
        onClose();
      }
    }

      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }

  }, []) 
  

  return (
    ReactDOM.createPortal (
      <>
        <div className={`${modalStyles.container} p-10`}>
          <button className={`${modalStyles.button}`} onClick={onClose} data-testid="modal-close-button">
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
        <ModalOverlay onClose={onClose}/>
      </>,
      modalRoot
    )
  );
}

export default Modal;