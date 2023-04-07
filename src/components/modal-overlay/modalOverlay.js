import modalOverlayStyles from './modalOverlay.module.css';
import Modal from "../modal/modal";

function ModalOverlay(props) {
  return (
    <div 
    className={`${modalOverlayStyles.modal} ${props.isOpen && modalOverlayStyles.modal_open}`}
    onClick={e => (e.currentTarget === e.target) && props.onClose()}
    >
      <Modal {...props} />
    </div>
  )
}

export default ModalOverlay;