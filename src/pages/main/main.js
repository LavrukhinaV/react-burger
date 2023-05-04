import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import mainStyles from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from "../../components/app-header/app-header";

function Main() {
  return (
    <div className="page text text_type_main-default">
      <AppHeader />
      <main className={mainStyles.content}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </main>
    </div>
  );
}

export default Main;