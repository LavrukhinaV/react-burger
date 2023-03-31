import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import mainStyles from './main.module.css';


function Main() {
  return (
    <main className={mainStyles.content}>
      <BurgerIngredients />
      <BurgerConstructor />
   </main>
  );
}

export default Main;