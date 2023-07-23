import OrderCard from "../order-card/order-card";
import ordersListStyles from "./orders-list.module.css"

function OrdersList () {
  return (
    <ul className={`${ordersListStyles.list} custom-scroll`}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ul>
  )
}

export default OrdersList;