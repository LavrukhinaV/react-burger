import modalStyles from './modal.module.css';
import { useEffect } from "react";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function Modal({title, children, onClose}) {
  
  useEffect(()=>{
    document.addEventListener('keydown', closeModalByEsc);
    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    }
  }, [])
  
  const closeModalByEsc = (e) => {
    if (e.keyCode === 27) {
      onClose()
    }
  }

  return (
    <div className={`${modalStyles.container} p-10`}>
      <button className={`${modalStyles.button}`} onClick={onClose}>
        <CloseIcon type="primary" />
      </button>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default Modal;