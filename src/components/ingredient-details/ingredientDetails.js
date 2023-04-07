import ModalOverlay from "../modal-overlay/modalOverlay";
import ingredientDetailsStyles from './ingredientDetails.module.css';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function IngredientDetails (props) {
  const modalRoot = document.getElementById("react-modals");

  return (
    ReactDOM.createPortal (
      <ModalOverlay {...props}>
        <div className={ingredientDetailsStyles.container}>
          <h2 className={`${ingredientDetailsStyles.title} text text_type_main-large mt-2`}>Детали ингредиента</h2>
          <img src={props.ingridient.image_large} alt={props.ingridient.name}/>
          <p className="mt-4 mb-8 text text_type_main-medium">{props.ingridient.name}</p>
          <ul className={`${ingredientDetailsStyles.table} text text_type_main-default text_color_inactive`}>
            <li className={ingredientDetailsStyles.tableItem}>
              <h3 className="text text_type_main-default mb-2">Калории,ккал</h3>
              <p className="text text_type_digits-default">{props.ingridient.calories}</p>
            </li>
            <li className={ingredientDetailsStyles.tableItem}>
              <h3 className="text text_type_main-default mb-2">Белки, г</h3>
              <p className="text text_type_digits-default">{props.ingridient.proteins}</p>
            </li>
            <li className={ingredientDetailsStyles.tableItem}>
              <h3 className="text text_type_main-default mb-2">Жиры, г</h3>
              <p className="text text_type_digits-default">{props.ingridient.calories}</p>
            </li>
            <li className={ingredientDetailsStyles.tableItem}>
              <h3 className="text text_type_main-default mb-2">Углеводы, г</h3>
              <p className="text text_type_digits-default">{props.ingridient.carbohydrates}</p>
            </li>
          </ul>
        </div>
      </ModalOverlay>,
      modalRoot
    )
  )
}

IngredientDetails.propTypes = {
  ingridient: PropTypes.shape({
    id: PropTypes.string,
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
  }),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default IngredientDetails;

