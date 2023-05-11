import orderHistoryStyles from './order-history.module.css';
import AppHeader from "../../components/app-header/app-header";
import ProfileMenu from "../../components/profile-menu/profile-menu";

function OrderHistory() {
  return (
    <div className={`${orderHistoryStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={`${orderHistoryStyles.content} mt-30`}>
        <div>
          <ProfileMenu />
        </div>
      </main>
    </div>
  )
};

export default OrderHistory;