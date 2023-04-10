import PropTypes from 'prop-types';
import burgerIngredientStyles from './burger-ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from "react";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ingredientType } from "../../utils/types";

function BurgerIngredient({item}) {

  const [selectedIngredient, setSelectedIngredient] = useState();

  function closeModal () {
    setSelectedIngredient()
  }

  function handleIngredientClick() {
    setSelectedIngredient(item)
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
      {selectedIngredient && (
        <Modal onClose={closeModal} isOpen={!!selectedIngredient}>
          <IngredientDetails ingridient={selectedIngredient}/>
        </Modal>
      )}
    </>
  );
}

BurgerIngredient.propTypes = {
  ingridient: PropTypes.shape(ingredientType)
};

export default BurgerIngredient;