import { useState } from 'react';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/types";

function BurgerIngredients ({initialIngridients}){
  const [current, setCurrent] = useState("Булки")

  const tabOnClick = (value) => {
    setCurrent(value)
    document.getElementById(value).scrollIntoView( { behavior: "smooth"})
  }

  return (
    <section className={`${burgerIngredientsStyles.ingredients} mt-10 mb-10`}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={`${burgerIngredientsStyles.tabs} mb-10`}>
        <Tab Tab value="Булки" active={current === 'Булки'} onClick={tabOnClick}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={tabOnClick}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={tabOnClick}>
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredientsStyles.table} custom-scroll`}>
        <h2 className="text text_type_main-medium mb-6" id="Булки">Булки</h2>
        <ul className={`${burgerIngredientsStyles.list} mb-10`}>
          {initialIngridients.filter(item => item.type === "bun").map((item) => 
          <li key={item._id} className={burgerIngredientsStyles.ingredient}>
            <Counter count={1} size="default" extraClass="m-1" />
            <BurgerIngredient item={item}/>
          </li>
          )}
        </ul>
        <h2 className="text text_type_main-medium mb-6" id="Соусы">Соусы</h2>
        <ul className={`${burgerIngredientsStyles.list} mb-10`}>
          {initialIngridients.filter(item => item.type === "sauce").map((item) => 
            <li key={item._id} className={burgerIngredientsStyles.ingredient}>
              <Counter count={1} size="default" extraClass="m-1" />
              <BurgerIngredient item={item}/>
            </li>
          )}
        </ul>
        <h2 className="text text_type_main-medium mb-6" id="Начинки">Начинки</h2>
        <ul className={`${burgerIngredientsStyles.list} mb-10`}>
          {initialIngridients.filter(item => item.type === "main").map((item) => 
            <li key={item._id} className={burgerIngredientsStyles.ingredient}>
              <Counter count={1} size="default" extraClass="m-1" />
              <BurgerIngredient item={item}/>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
};

BurgerIngredients.propTypes = {
  initialIngridients: PropTypes.arrayOf(
    PropTypes.shape(ingredientType)
  )
};

export default BurgerIngredients;