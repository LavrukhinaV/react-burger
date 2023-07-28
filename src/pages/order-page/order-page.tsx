import Order from '../../components/order/order';
import { FEED_CONNECTION_CLOSE, FEED_CONNECTION_INIT } from '../../services/constants/ws';
import { useDispatch } from '../../services/hooks/hooks';
import { useEffect } from 'react';
import { BURGER_API_WSS_FEED_ALL } from '../../utils/constants';

function OrderPage () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FEED_CONNECTION_INIT,
      payload: BURGER_API_WSS_FEED_ALL,
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