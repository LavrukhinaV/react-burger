import { useSelector } from "react-redux";
import OrderCard from "../order-card/order-card";
import ordersListStyles from "./orders-list.module.css"
import { getFeedOrders } from "../../services/selectors/feed";

function OrdersList () {
  const orders = useSelector(getFeedOrders)
  
  return (
    <ul className={`${ordersListStyles.list} custom-scroll`}>
      {orders?.map((order) => 
        <OrderCard order={order} key={order._id}/>
      )}
    </ul>
  )
}

export default OrdersList;