import feedInfoStyles from "./feed-info.module.css"

function FeedInfo () {
  return (
    <section className={`${feedInfoStyles.section} custom-scroll`}>
      <div>
        <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
        <ul>
          <li className="text text_type_digits-default text_color_success">034538</li>
        </ul>
      </div>
      <div>
        <h3 className="text text_type_main-medium mb-6">В работе:</h3>
        <ul>
          <li className="text text_type_digits-default">034538</li>
        </ul>
      </div>
      <div className={feedInfoStyles.wrapper}>
        <h3 className="text text_type_main-medium">Готовы:</h3>
        <p className="text text_type_digits-large">28 752</p>
      </div>
      <div className={feedInfoStyles.wrapper}>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p className="text text_type_digits-large ">138</p>
      </div>
    </section>
  )
}

export default FeedInfo;