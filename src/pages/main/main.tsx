import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import mainStyles from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Main() {
  return (
    <main className={mainStyles.content}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </DndProvider>
    </main>
  );
}

export default Main;