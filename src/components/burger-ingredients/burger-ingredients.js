import { useState } from 'react';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_INGRIDIENT, DELETE_SELECTED_INGRIDIENT } from "../../services/actions/selected-ingridient";

function BurgerIngredients (){
  const dispatch = useDispatch();

  const initialIngridients = useSelector(state => state.ingridients.ingridients);
  const selectedIngredient = useSelector(state => state.ingridient.selectedIngridient);
  const constructorIngridients = useSelector(state => state.burgerConstructor.ingridients)
  const constructorBun = useSelector(state => state.burgerConstructor.bun)

  const [current, setCurrent] = useState("Булки");

  function closeModal () {
    dispatch({
      type: DELETE_SELECTED_INGRIDIENT
    });
  }

  function handleIngredientClick(item) {
    dispatch({
      type: SET_SELECTED_INGRIDIENT,
      paylod: item
    });
  }

  const tabOnClick = (value) => {
    setCurrent(value)
    document.getElementById(value).scrollIntoView( { behavior: "smooth"})
  }

  const onIngridientsScroll = () => {

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

  const calculateCount = (ingridient) => {
    let count = 0;
    if(ingridient.type !== "bun") {
      constructorIngridients.forEach(item => {
          if (ingridient._id === item._id) {
              count++
          }
      })
    } else {
      if (ingridient._id === constructorBun._id) {
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
        <div className={`${burgerIngredientsStyles.table} custom-scroll`} onScroll={onIngridientsScroll} id="контейнер">
          <h2 className="text text_type_main-medium mb-6" id="Булки">Булки</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {initialIngridients.filter(item => item.type === "bun").map((item) => 
            <li key={item._id} className={burgerIngredientsStyles.ingredient}>
              <Counter count={calculateCount(item)} size="default" extraClass="m-1" />
              <BurgerIngredient item={item} onClick={handleIngredientClick}/>
            </li>
            )}
          </ul>
          <h2 className="text text_type_main-medium mb-6" id="Соусы">Соусы</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {initialIngridients.filter(item => item.type === "sauce").map((item) => 
              <li key={item._id} className={burgerIngredientsStyles.ingredient}>
                <Counter count={calculateCount(item)} size="default" extraClass="m-1" />
                <BurgerIngredient item={item} onClick={handleIngredientClick}/>
              </li>
            )}
          </ul>
          <h2 className="text text_type_main-medium mb-6" id="Начинки">Начинки</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {initialIngridients.filter(item => item.type === "main").map((item) => 
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
          <IngredientDetails ingridient={selectedIngredient}/>
        </Modal>
      )}
    </>
  )
};

BurgerIngredients.propTypes = {
  initialIngridients: PropTypes.arrayOf(
    ingredientType
  )
};

export default BurgerIngredients;