import constructorIngredientStyles from "./constructor-ingredient.module.css";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { DELETE_CONSTRUCTOR_INGREDIENT, UPDATE_CONSTRUCTOR_INGREDIENTS } from "../../services/actions/burger-constructor";
import { useDrag, useDrop,  DropTargetMonitor, XYCoord } from "react-dnd";
import { useRef, FC } from "react";
import { TIngredientData } from "../../utils/types";

type ConstructorIngredientPropsType = {
  ingredient: TIngredientData;
  index: number;
};

interface DragItem {
  index: number;
  id: string;
}

const ConstructorIngredient: FC<ConstructorIngredientPropsType> = ({ ingredient, index }) => {
  const dispatch = useDispatch();

  const ref = useRef<HTMLLIElement>(null);
  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string| symbol |null }>({
    accept: ["UPDATE_CONSTRUCTOR_INGREDIENTS"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor ) {
      if (!ref.current) {
        return;
      }

      const dragIndex: number  = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if(dragIndex && dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex && dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
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