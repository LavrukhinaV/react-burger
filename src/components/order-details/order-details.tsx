import orderDetailsStyles from './order-details.module.css';
import { useSelector } from '../../services/hooks/hooks';
import { getOrderDate } from "../../services/selectors/order-details";
import Preloader from "../preloader/preloader";

function OrderDetails() {
  const orderDate = useSelector(getOrderDate);

  if (Object.keys(orderDate).length === 0) {
    return (<Preloader />)
  }

  return (
    orderDate &&
      <div className={orderDetailsStyles.container}>
        <h2 className={`${orderDetailsStyles.title} mb-8 text text_type_digits-large`}>{orderDate.order?.number}</h2>
        <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
        <span className={`${orderDetailsStyles.icon} mb-15`}/>
        <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
  )
}

export default OrderDetails;