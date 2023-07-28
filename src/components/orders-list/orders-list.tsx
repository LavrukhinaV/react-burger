import OrderCard from "../order-card/order-card";
import ordersListStyles from "./orders-list.module.css"
import { useSelector } from "../../services/hooks/hooks";
import { getFeedOrders } from "../../services/selectors/feed";

const OrdersList = () => {

  const orders = useSelector(getFeedOrders);

  return (
    <div className={`${ordersListStyles.list} custom-scroll`}>
      {orders?.map((order) => 
        <OrderCard order={order} key={order._id} />
      )}
    </div>
  )
}

export default OrdersList;