import orderHistoryStyles from './order-history.module.css';
import ProfileMenu from "../../components/profile-menu/profile-menu";
import OrdersList from '../../components/orders-list/orders-list';
import { BURGER_API_WSS_FEED_USER } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FEED_CONNECTION_CLOSE, FEED_CONNECTION_INIT } from '../../services/constants/ws';
import { getFeedOrders } from '../../services/selectors/feed';
import { getCookie } from '../../utils/cookie';

function OrderHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("authToken")
    dispatch({
      type: FEED_CONNECTION_INIT,
      payload: `${BURGER_API_WSS_FEED_USER}?token=${token}`,
    })

    return () => {
      dispatch({ type: FEED_CONNECTION_CLOSE })
    }
  }, [dispatch])

  const orders = useSelector(getFeedOrders);

  return (
    <main className={`${orderHistoryStyles.content} mt-30`}>
        <ProfileMenu />
        <OrdersList orders={orders}/>
    </main>
  )
};

export default OrderHistory;