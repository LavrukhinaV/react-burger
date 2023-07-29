import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import orderStyles from './order.module.css'
import { useSelector } from '../../services/hooks/hooks';
import { useParams } from 'react-router-dom';
import { TFeedOrder, TIngredientData, formatOrderStatus } from '../../utils/types';
import Preloader from '../preloader/preloader';
import { getInitialIngredients } from '../../services/selectors/initial-ingredients';
import { useMemo } from 'react';
import { getFeedOrders } from '../../services/selectors/feed';

function Order () {
  const orders: TFeedOrder[] = useSelector(getFeedOrders);
  const ingredients = useSelector(getInitialIngredients);
  const { id } = useParams<{id: string}>();
  const order: TFeedOrder | undefined = orders?.find(order => order._id === id)
  
  const orderInfo = useMemo(() => {
    if (!ingredients.length || !orders?.length) return null
    
    const ingredientsInfo: Array<TIngredientData> = order?.ingredients.reduce((acc: any, item: string) => {
      const ingredient = ingredients.find((ing) => ing._id === item)
      if (ingredient) acc.push(ingredient)
      return acc
    }, [])
    

    const uniqIngredients: Array<TIngredientData> = ingredientsInfo.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t._id === value._id
      ))
    )
    
    type TcountIngredients = {
      [key: string]: number
    }

    const countIngredients = ingredientsInfo.reduce((acc: TcountIngredients, ingredient: { _id: string | number; }) => {
      acc[ingredient._id] = (acc[ingredient._id] || 0) +1
      return acc
    }, {})

    const total: number = ingredientsInfo?.reduce((acc, item) => {
      return acc + item.price
    }, 0)

    return {
      ...order,
      uniqIngredients,
      total,
      countIngredients,
    }
  }, [ingredients, orders?.length, order])

  if (orders === null || orders.length === 0) {
    return (<Preloader />)
  }

  if (order && orderInfo) return (
    <section className={`${orderStyles.order} mt-5`}>
      <h1 className='text text_type_digits-default mb-10'>{`# ${order.number}`}</h1>
      <h2 className="text text_type_main-medium mb-3">{order.name}</h2>
      <p className='text text_type_main-default mb-15 text_color_success'>{formatOrderStatus(order.status)}</p>
      <h3 className='text text_type_main-medium mb-6'>Состав:</h3>
      <ul className={`${orderStyles.ingredients} mb-10 custom-scroll`}>
        {orderInfo.uniqIngredients.map((ingredient, index) => 
          <li key={index}>
            <div className={orderStyles.ingredient}>
              <div className={orderStyles.ingredientWrapper}>
                <img src={ingredient.image_mobile} alt={ingredient.name}/>
              </div>
            </div>
            <p className={orderStyles.ingredientName}>{ingredient.name}</p>
            <div className={orderStyles.count}>
              <div>
                {orderInfo.countIngredients[ingredient._id]}
                <span>x</span>
                {ingredient.price}
              </div>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        )}
      </ul>
      <div className={orderStyles.wrapper}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
        <div className={orderStyles.total}>
          <p className="text text_type_digits-default">{orderInfo.total}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
  else {
    return null;
  }
}

export default Order;