import { useSelector } from "../../services/hooks/hooks";
import feedInfoStyles from "./feed-info.module.css"
import { getFeedOrders, getFeedTotalOrders, getFeedTotalTodayOrders } from "../../services/selectors/feed";

function FeedInfo () {
  const orders = useSelector(getFeedOrders);
  const totalOrders = useSelector(getFeedTotalOrders);
  const totalOrdersToday = useSelector(getFeedTotalTodayOrders);

  return (
    <section className={`${feedInfoStyles.section} custom-scroll`}>
      <div>
        <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
        <ul className={feedInfoStyles.list}>
          {
            orders?.filter(order => order.status === 'done').slice(0, 10).map((order) =>
              <li className="text text_type_digits-default text_color_success" key={order.number}>{order.number}</li>
            )
          }
        </ul>
      </div>
      <div>
        <h3 className="text text_type_main-medium mb-6">В работе:</h3>
        <ul className={feedInfoStyles.list}>
          {
            orders?.filter(order => order.status !== 'done').slice(0, 10).map((order) =>
              <li className="text text_type_digits-default" key={order.number}>{order.number}</li>
            )
          }
        </ul>
      </div>
      <div className={feedInfoStyles.wrapper}>
        <h3 className="text text_type_main-medium">Готовы:</h3>
        <p className="text text_type_digits-large">{totalOrders}</p>
      </div>
      <div className={feedInfoStyles.wrapper}>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p className="text text_type_digits-large ">{totalOrdersToday}</p>
      </div>
    </section>
  )
}

export default FeedInfo;