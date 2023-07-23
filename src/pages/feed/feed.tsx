import { useDispatch, useSelector } from 'react-redux';
import FeedInfo from '../../components/feed-info/feed-info';
import OrdersList from '../../components/orders-list/orders-list';
import feedStyles from './feed.module.css';
import { useEffect } from 'react';
import { FEED_CONNECTION_CLOSE, FEED_CONNECTION_INIT } from '../../services/constants/ws';
import { BURGER_API_WSS_FEED } from '../../utils/constants';
import { getFeedOrders } from '../../services/selectors/feed';
import { TFeedOrder } from '../../utils/types';

function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FEED_CONNECTION_INIT,
      payload: BURGER_API_WSS_FEED,
    })

    return () => {
      dispatch({ type: FEED_CONNECTION_CLOSE })
    }
  }, [dispatch])


  return (
    <main className={feedStyles.content}>
      <h1 className="text text_type_main-large mb-5 mt-10">Лента заказов</h1>
      <div className={feedStyles.container}>
        <OrdersList />
        <FeedInfo />
      </div>
    </main>
  )
}

export default Feed;