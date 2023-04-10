import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({onClose}) {
  return (
    <div 
    className={modalOverlayStyles.modal}
    onClick={e => (e.currentTarget === e.target) && onClose()}
    />
  )
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
};

export default ModalOverlay;