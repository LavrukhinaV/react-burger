import modalStyles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modals");

function Modal({children, onClose, isOpen}) {

  useEffect(() => {
    function closeByEscape(evt) {
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
          <button className={`${modalStyles.button}`} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
        <ModalOverlay onClose={onClose} isOpen={isOpen}/>
      </>,
      modalRoot
    )
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Modal;