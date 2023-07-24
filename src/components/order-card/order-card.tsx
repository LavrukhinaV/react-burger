import orderCardStyles from "./order-card.module.css"
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useMemo } from "react";
import { TFeedOrder, TIngredientData } from "../../utils/types";
import { useSelector } from "react-redux";
import { getInitialIngredients } from "../../services/selectors/initial-ingredients";
import { Link, useLocation } from "react-router-dom";

type OrderCardPropsType = {
  order: TFeedOrder;
};

const OrderCard: FC<OrderCardPropsType> = ({ order }) => {
  const location = useLocation();

  const ingredients = useSelector(getInitialIngredients);
  
  const maxIngredientsToShow = 6;

  const orderInfo = useMemo(() => {
    if (!ingredients.length) return null

    const ingredientsInfo = order.ingredients.reduce((acc: any, item: string) => {
      const ingredient = ingredients.find((ing) => ing._id === item)
      if (ingredient) acc.push(ingredient)
      return acc
    }, [])

    const total = ingredientsInfo.reduce((acc: any, item: TIngredientData) => {
      return acc + item.price
    }, 0)

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredientsToShow)

    const count = 
      ingredientsInfo.length > maxIngredientsToShow
      ? ingredientsInfo.length - maxIngredientsToShow
      : null

    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      total,
      count
    }
  }, [order, ingredients])

  if(!orderInfo) return null;

  return (
    <Link to={`/feed/${order._id}`} state={{background: location}}>
      <article className={`${orderCardStyles.order} p-6`} >
        <h3 className="text text_type_digits-default">
          {order.number}
        </h3>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
        <h2 className={`${orderCardStyles.orderTitle} text text_type_main-medium`}>{order.name}</h2>
        {/* <p className={`${orderCardStyles.status} text text_type_main-default`}>Создан</p> */}
        <ul className={orderCardStyles.ingredients}>
          {
            orderInfo.ingredientsToShow.map((ingredient: TIngredientData, index: number) => {
              let zIndex = maxIngredientsToShow - index
              let areHiddenIngredients = maxIngredientsToShow === index + 1
              return (
                <li className={orderCardStyles.ingredient} key={index} style={{ zIndex: zIndex}}>
                  <div className={`${orderCardStyles.ingredientWrapper} ${areHiddenIngredients && orderCardStyles.ingredientWrapperDisabled}`}>
                    <img src={ingredient.image_mobile} alt={ingredient.name}/>
                    {areHiddenIngredients
                    ? <span className={`${orderCardStyles.count} text text_type_main-default`}>+{orderInfo.count}</span>
                    : null}
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className={orderCardStyles.total}>
          <p className="text text_type_digits-default">{orderInfo.total}</p>
          <CurrencyIcon type="primary" />
        </div>
      </article>
    </Link>
  )
}

export default OrderCard;