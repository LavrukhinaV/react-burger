import ingredientDetailsStyles from './ingredient-details.module.css';
import { ingredientType } from "../../utils/types";

function IngredientDetails ({ingridient}) {

  return (
    <div className={ingredientDetailsStyles.container}>
      <h2 className={`${ingredientDetailsStyles.title} text text_type_main-large mt-2`}>Детали ингредиента</h2>
      <img src={ingridient.image_large} alt={ingridient.name}/>
      <p className="mt-4 mb-8 text text_type_main-medium">{ingridient.name}</p>
      <ul className={`${ingredientDetailsStyles.table} text text_type_main-default text_color_inactive`}>
        <li className={ingredientDetailsStyles.tableItem}>
          <h3 className="text text_type_main-default mb-2">Калории,ккал</h3>
          <p className="text text_type_digits-default">{ingridient.calories}</p>
        </li>
        <li className={ingredientDetailsStyles.tableItem}>
          <h3 className="text text_type_main-default mb-2">Белки, г</h3>
          <p className="text text_type_digits-default">{ingridient.proteins}</p>
        </li>
        <li className={ingredientDetailsStyles.tableItem}>
          <h3 className="text text_type_main-default mb-2">Жиры, г</h3>
          <p className="text text_type_digits-default">{ingridient.calories}</p>
        </li>
        <li className={ingredientDetailsStyles.tableItem}>
          <h3 className="text text_type_main-default mb-2">Углеводы, г</h3>
          <p className="text text_type_digits-default">{ingridient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
  ingridient: ingredientType
};

export default IngredientDetails;

