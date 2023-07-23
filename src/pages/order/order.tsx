import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import orderStyles from './order.module.css'
import bunImage from "../../images/bun-01.png"

function Order () {
  return (
    <main className={orderStyles.main}>
      <section className={orderStyles.order}>
        <h1 className='text text_type_digits-default mb-10'>#034533</h1>
        <h2 className="text text_type_main-medium mb-3">Black Hole Singularity острый бургер</h2>
        <p className='text text_type_main-default mb-15 text_color_success'>Выполнен</p>
        <h3 className='text text_type_main-medium mb-6'>Состав:</h3>
        <ul className={`${orderStyles.ingredients} mb-10`}>
          <li>
            <div className={orderStyles.ingredient}>
              <div>
                <img src={bunImage}/>
              </div>
            </div>
            <p>Флюоресцентная булка R2-D3</p>
            <div className={orderStyles.count}>
              <div>
                2
                <span>x</span>
                20
              </div>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        </ul>
        <div className={orderStyles.wrapper}>
          <p className="text text_type_main-default text_color_inactive">Вчера, 13:50</p>
          <div className={orderStyles.total}>
            <p className="text text_type_digits-default">510</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Order;