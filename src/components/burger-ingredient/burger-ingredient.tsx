import burgerIngredientStyles from './burger-ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredientData } from "../../utils/types";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { FC } from 'react';

type BurgerIngredientPropsType = {
  item: TIngredientData;
  count: number;
  onClick: (item: TIngredientData) => void
};

const BurgerIngredient: FC<BurgerIngredientPropsType> = ({item, onClick, count}) => {
  const location = useLocation();

  function handleIngredientClick() {
    onClick(item)
  }

  const [, dragRef] = useDrag({
    type: 'ingredients',
    item: item,
  });

  return (
    <Link
      className={`${burgerIngredientStyles.link} text_color_primary`}
      to={`/ingredients/${item._id}`}
      state={{background: location}}
      data-testid="ingredient-item"
    >
      {count !== 0 ? <Counter count={count} size="default" extraClass="m-1" /> : ""}
      <article className={`${burgerIngredientStyles.ingredient}`} onClick={handleIngredientClick} ref={dragRef}>
        <img className="mb-1" src={item.image} alt={item.name}/>
        <div className={burgerIngredientStyles.price}>
          <p className="mb-1 text text_type_main-medium">
            {item.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className="text text_type_main-default">{item.name}</h3>
      </article>
    </Link>
  );
}

export default BurgerIngredient;