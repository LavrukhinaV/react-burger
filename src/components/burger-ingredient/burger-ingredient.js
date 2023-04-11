import PropTypes from 'prop-types';
import burgerIngredientStyles from './burger-ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from "../../utils/types";

function BurgerIngredient({item, onClick}) {

  function handleIngredientClick() {
    onClick(item)
  }

  return (
    <>
      <article className={`${burgerIngredientStyles.ingredient}`} onClick={handleIngredientClick}>
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
  onClick: PropTypes.func
};

export default BurgerIngredient;