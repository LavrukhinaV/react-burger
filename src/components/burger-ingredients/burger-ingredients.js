import React from 'react';
import burgerIngredientsStyles from './burgerIngredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { data } from "../../ utils/data";


class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Булки",
    }
  }

  setCurrent = (value) => {
    this.setState({
      current: value
    });
  }

  tabOnClick =(value) => {
    this.setCurrent(value)
    document.getElementById(value).scrollIntoView( { behavior: "smooth"})
  }

  render() {
    return (
      <section className={`${burgerIngredientsStyles.ingredients} mt-10 mb-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className="mb-10" style={{ display: 'flex' }}>
          <Tab Tab value="Булки" active={this.state.current === 'Булки'} onClick={this.tabOnClick}>
            Булки
          </Tab>
          <Tab value="Соусы" active={this.state.current === 'Соусы'} onClick={this.tabOnClick}>
            Соусы
          </Tab>
          <Tab value="Начинки" active={this.state.current === 'Начинки'} onClick={this.tabOnClick}>
            Начинки
          </Tab>
        </div>
        <div className={`${burgerIngredientsStyles.table} custom-scroll`}>
          <h2 className="text text_type_main-medium mb-6" id="Булки">Булки</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {data.filter(item => item.type === "bun").map((item) => 
            <li key={item._id}>
              <Counter count={1} size="default" extraClass="m-1" />
              <BurgerIngredient {...item}/>
            </li>
            )}
          </ul>
          <h2 className="text text_type_main-medium mb-6" id="Соусы">Соусы</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {data.filter(item => item.type === "sauce").map((item) => 
              <li key={item._id}>
                <Counter count={1} size="default" extraClass="m-1" />
                <BurgerIngredient {...item}/>
              </li>
            )}
          </ul>
          <h2 className="text text_type_main-medium mb-6" id="Начинки">Начинки</h2>
          <ul className={`${burgerIngredientsStyles.list} mb-10`}>
            {data.filter(item => item.type === "main").map((item) => 
              <li key={item._id}>
                <Counter count={1} size="default" extraClass="m-1" />
                <BurgerIngredient {...item}/>
              </li>
            )}
          </ul>
        </div>
      </section>
    )
  }
};

export default BurgerIngredients;