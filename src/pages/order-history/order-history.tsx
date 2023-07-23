import orderHistoryStyles from './order-history.module.css';
import ProfileMenu from "../../components/profile-menu/profile-menu";
import OrdersList from '../../components/orders-list/orders-list';

function OrderHistory() {
  return (
    <main className={`${orderHistoryStyles.content} mt-30`}>

        <ProfileMenu />
        <OrdersList />

    </main>
  )
};

export default OrderHistory;