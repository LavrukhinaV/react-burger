import orderDetailsStyles from './orderDetails.module.css';
import ModalOverlay from "../modal-overlay/modalOverlay";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function OrderDetails(props) {
  const modalRoot = document.getElementById("react-modals");

  return (
    ReactDOM.createPortal (
      <ModalOverlay {...props}>
        <div className={orderDetailsStyles.container}>
          <h2 className={`${orderDetailsStyles.title} mb-8 text text_type_digits-large`}>034536</h2>
          <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
          <span className={`${orderDetailsStyles.icon} mb-15`}/>
          <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
      </ModalOverlay>,
      modalRoot
    )
  )
}

OrderDetails.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default OrderDetails;