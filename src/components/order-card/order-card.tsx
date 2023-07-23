import orderCardStyles from "./order-card.module.css"
import bunImage from "../../images/bun-01.png"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function OrderCard () {
  return (
    <li className={`${orderCardStyles.order} p-6`}>
      <h3 className="text text_type_digits-default">
        #034535
      </h3>
      <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20</p>
      <h2 className={`${orderCardStyles.orderTitle} text text_type_main-medium`}>Death Star Starship Main бургер</h2>
      <p className={`${orderCardStyles.status} text text_type_main-default`}>Создан</p>
      <ul className={orderCardStyles.ingredients}>
        <li className={orderCardStyles.ingredient}>
          <div>
            <img src={bunImage}/>
          </div>
        </li>
      </ul>
      <div className={orderCardStyles.total}>
        <p className="text text_type_digits-default">480</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  )
}

export default OrderCard;