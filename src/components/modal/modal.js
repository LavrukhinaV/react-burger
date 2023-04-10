import modalStyles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modals");

function Modal({children, onClose}) {
  
  const closeModalByEsc = (e) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  useEffect(()=>{
    document.addEventListener('keydown', closeModalByEsc);
    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    }
  }, [onClose])
  

  return (
    ReactDOM.createPortal (
      <>
        <div className={`${modalStyles.container} p-10`}>
          <button className={`${modalStyles.button}`} onClick={onClose}>
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

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
};

export default Modal;