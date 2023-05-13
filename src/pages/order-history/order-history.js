import orderHistoryStyles from './order-history.module.css';
import ProfileMenu from "../../components/profile-menu/profile-menu";

function OrderHistory() {
  return (
    <main className={`${orderHistoryStyles.content} mt-30`}>
      <div>
        <ProfileMenu />
      </div>
    </main>
  )
};

export default OrderHistory;