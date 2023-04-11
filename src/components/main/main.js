import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import mainStyles from './main.module.css';
import { ingredientType } from "../../utils/types";
import PropTypes from 'prop-types';

function Main({initialIngridients}) {
  return (
    <main className={mainStyles.content}>
      <BurgerIngredients initialIngridients={initialIngridients}/>
      <BurgerConstructor/>
   </main>
  );
}

Main.propTypes = {
  initialIngridients: PropTypes.arrayOf(
    ingredientType
  )
};

export default Main;