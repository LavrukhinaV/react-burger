import PropTypes from 'prop-types';
import burgerIngredientStyles from './burgerIngredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredient({item, onClick}) {

  const onIngridientClick = () => {
    onClick(item)
  }

  return (
    <article className={`${burgerIngredientStyles.ingredient}`} onClick={onIngridientClick}>
      <img className="mb-1" src={item.image} alt={item.name}/>
      <div className={burgerIngredientStyles.price}>
        <p className="mb-1 text text_type_main-medium">
          {item.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </article>
  );
}

BurgerIngredient.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

export default BurgerIngredient;