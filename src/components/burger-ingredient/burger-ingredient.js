import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientStyles from './burgerIngredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

class BurgerIngredient extends React.Component {

  render() {
    return (
      <article className={`${burgerIngredientStyles.ingredient}`}>
        <img className="mb-1" src={this.props.image} alt={this.props.name}/>
        <div className={burgerIngredientStyles.price}>
          <p className="mb-1 text text_type_main-medium">
            {this.props.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className="text text_type_main-default">{this.props.name}</h3>
      </article>
    );
  }
}


BurgerIngredient.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

export default BurgerIngredient;