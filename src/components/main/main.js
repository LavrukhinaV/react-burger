import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import mainStyles from './main.module.css';
import { ingredientType } from "../../utils/types";
import PropTypes from 'prop-types';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Main({initialIngredients}) {
  return (
    <main className={mainStyles.content}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients initialIngredients={initialIngredients}/>
        <BurgerConstructor/>
      </DndProvider>
   </main>
  );
}

Main.propTypes = {
  initialIngredients: PropTypes.arrayOf(
    ingredientType
  )
};

export default Main;