import { useState } from 'react';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_INGREDIENT, DELETE_SELECTED_INGREDIENT } from "../../services/actions/selected-ingredient";

function BurgerIngredients (){
  const dispatch = useDispatch();

  const initialIngredients = useSelector(state => state.ingredients.ingredients);
  const selectedIngredient = useSelector(state => state.ingredient.selectedIngredient);
  const constructorIngredients = useSelector(state => state.burgerConstructor.ingredients)
  const constructorBun = useSelector(state => state.burgerConstructor.bun)

  const [current, setCurrent] = useState("Булки");

  function closeModal () {
    dispatch({
      type: DELETE_SELECTED_INGREDIENT
    });
  }

  function handleIngredientClick(item) {
    dispatch({
      type: SET_SELECTED_INGREDIENT,
      paylod: item
    });
  }

  const tabOnClick = (value) => {
    setCurrent(value)
    document.getElementById(value).scrollIntoView( { behavior: "smooth"})
  }

  const onIngredientsScroll = () => {

    const containerTop = document.getElementById('контейнер').getBoundingClientRect().top;
    const bunTop = document.getElementById('Булки').getBoundingClientRect().top;
    const sauceTop = document.getElementById('Соусы').getBoundingClientRect().top;
    const mainTop = document.getElementById('Начинки').getBoundingClientRect().top;

    if (bunTop >= containerTop && containerTop < sauceTop) {
        setCurrent('Булки')
    } else if (sauceTop <= containerTop && containerTop < mainTop) {
        setCurrent('Соусы')
    } else if (mainTop <= containerTop) {
        setCurrent('Начинки')
    }
  }

  const calculateCount = (ingredient) => {
    let count = 0;
    if(ingredient.type !== "bun") {
      constructorIngredients.forEach(item => {
          if (ingredient._id === item._id) {
              count++
          }
      })
    } else {
      if (ingredient._id === constructorBun._id) {
        count = 2;
      }
    }
    return count;
  }

  return (
    <>
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
        <div className={`${burgerIngredientsStyles.table} custom-scroll`} onScroll={onIngredientsScroll} id="контейнер">
          <h2 className="text text_type_main-medium mb-6" id="Булки">Булки</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {initialIngredients.filter(item => item.type === "bun").map((item) => 
            <li key={item._id} className={burgerIngredientsStyles.ingredient}>
              <Counter count={calculateCount(item)} size="default" extraClass="m-1" />
              <BurgerIngredient item={item} onClick={handleIngredientClick}/>
            </li>
            )}
          </ul>
          <h2 className="text text_type_main-medium mb-6" id="Соусы">Соусы</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {initialIngredients.filter(item => item.type === "sauce").map((item) => 
              <li key={item._id} className={burgerIngredientsStyles.ingredient}>
                <Counter count={calculateCount(item)} size="default" extraClass="m-1" />
                <BurgerIngredient item={item} onClick={handleIngredientClick}/>
              </li>
            )}
          </ul>
          <h2 className="text text_type_main-medium mb-6" id="Начинки">Начинки</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {initialIngredients.filter(item => item.type === "main").map((item) => 
              <li key={item._id} className={burgerIngredientsStyles.ingredient}>
                <Counter count={calculateCount(item)} size="default" extraClass="m-1" />
                <BurgerIngredient item={item} onClick={handleIngredientClick}/>
              </li>
            )}
          </ul>
        </div>
      </section>
      {Object.keys(selectedIngredient).length !== 0 && (
        <Modal onClose={closeModal} isOpen={!!selectedIngredient}>
          <IngredientDetails ingredient={selectedIngredient}/>
        </Modal>
      )}
    </>
  )
};

BurgerIngredients.propTypes = {
  initialIngredients: PropTypes.arrayOf(
    ingredientType
  )
};

export default BurgerIngredients;