import constructorIngredientStyles from "./constructor-ingredient.module.css";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { DELETE_CONSTRUCTOR_INGREDIENT, UPDATE_CONSTRUCTOR_INGREDIENTS } from "../../services/actions/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

function ConstructorIngredient ({ ingredient, index }) {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ["UPDATE_CONSTRUCTOR_INGREDIENTS"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      dispatch({
        type: UPDATE_CONSTRUCTOR_INGREDIENTS,
        payload: {
          from: dragIndex,
          to: hoverIndex,
        },
      });
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "UPDATE_CONSTRUCTOR_INGREDIENTS",
    item: () => {
      return {ingredient, index}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      style={{ opacity }}
      data-handler-id={handlerId}
      ref={ref}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => {
          dispatch ({
            type: DELETE_CONSTRUCTOR_INGREDIENT,
            ingredient
           })
        }}
      />
    </li>
  )
};

export default ConstructorIngredient;