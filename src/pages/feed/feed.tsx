import FeedInfo from '../../components/feed-info/feed-info';
import OrdersList from '../../components/orders-list/orders-list';
import feedStyles from './feed.module.css';

function Feed() {
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