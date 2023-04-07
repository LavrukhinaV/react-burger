import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import mainStyles from './main.module.css';


function Main({onSubmitOrder, onIngredientClick, initialIngridients}) {
  return (
    <main className={mainStyles.content}>
      <BurgerIngredients onIngredientClick={onIngredientClick} initialIngridients={initialIngridients}/>
      <BurgerConstructor onSubmit={onSubmitOrder}/>
   </main>
  );
}

export default Main;