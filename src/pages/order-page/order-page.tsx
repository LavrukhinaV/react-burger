import Order from '../../components/order/order';
import { FEED_CONNECTION_CLOSE, FEED_CONNECTION_INIT } from '../../services/constants/ws';
import { useDispatch } from '../../services/hooks/hooks';
import { useEffect } from 'react';
import { BURGER_API_WSS_FEED_ALL, BURGER_API_WSS_FEED_USER } from '../../utils/constants';
import { getCookie } from '../../utils/cookie';
import { useLocation } from 'react-router-dom';

function OrderPage () {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    const token = getCookie("authToken")
    const locationWithoutParams = location.pathname.slice(0, location.pathname.lastIndexOf('/'))
    const wsConnectTo = locationWithoutParams === "/feed"  ? BURGER_API_WSS_FEED_ALL : `${BURGER_API_WSS_FEED_USER}?token=${token}`

    dispatch({
      type: FEED_CONNECTION_INIT,
      payload: wsConnectTo,
    })

    return () => {
      dispatch({ type: FEED_CONNECTION_CLOSE })
    }
  }, [dispatch])

  return (
    <main className="mt-20">
      <Order />
    </main>
  )
}

export default OrderPage;