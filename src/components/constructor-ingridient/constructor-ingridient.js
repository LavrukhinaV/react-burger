import constructorIngridientStyles from "./constructor-ingridient.module.css";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { DELETE_CONSTRUCTOR_INGRIDIENT } from "../../services/actions/burger-constructor";
import { useDrag } from "react-dnd";

function ConstructorIngridient ({ ingridient }) {
  const dispatch = useDispatch();

  return (
     <li>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingridient.name}
        price={ingridient.price}
        thumbnail={ingridient.image}
        handleClose={() => {
          dispatch ({
            type: DELETE_CONSTRUCTOR_INGRIDIENT,
            ingridient
        })
        }}
      />
    </li>
  )
};

export default ConstructorIngridient;