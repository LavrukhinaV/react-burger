import OrderCard from "../order-card/order-card";
import ordersListStyles from "./orders-list.module.css"
import { TFeedOrder } from "../../utils/types";
import { FC } from "react";

type OrdersListPropsType = {
  orders?: TFeedOrder[];
};

const OrdersList: FC<OrdersListPropsType> = ({ orders }) => {

  return (
    <div className={`${ordersListStyles.list} custom-scroll`}>
      {orders?.map((order) => 
        <OrderCard order={order} key={order._id} />
      )}
    </div>
  )
}

export default OrdersList;