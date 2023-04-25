import PropTypes from 'prop-types';
import burgerIngredientStyles from './burger-ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from "../../utils/types";
import { useDrag } from "react-dnd";

function BurgerIngredient({item, onClick, count}) {

  function handleIngredientClick() {
    onClick(item)
  }

  const [, dragRef] = useDrag({
    type: 'ingredients',
    item: item,
  });

  return (
    <>
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
    </>
  );
}

BurgerIngredient.propTypes = {
  item: ingredientType.isRequired,
  onClick: PropTypes.func,
  count: PropTypes.number
};

export default BurgerIngredient;