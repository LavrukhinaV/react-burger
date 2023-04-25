import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useCallback, useEffect } from "react";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { getOrderDate } from "../../services/actions/order-details";
import { useDispatch, useSelector } from 'react-redux';
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";
import { useDrop } from "react-dnd";
import { addConstructorIngredient, setConstructorBun } from "../../services/actions/burger-constructor";
import { UPDATE_CONSTRUCTOR_INGRIEIENTS } from "../../services/actions/burger-constructor";

function BurgerConstructor () {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(state => state.burgerConstructor.ingredients);
  const constructorBun = useSelector(state => state.burgerConstructor.bun);

  const [isModalOrderDetailsOpen, setModalOrderDetailsOpen] = useState(false);

  const orderIngredients = () => {
    const allIngredients = [
        ...Array(2).fill(constructorBun._id),
        ...constructorIngredients.map(item => item._id)
    ]
    return allIngredients
  }

  function handleOrderSubmit() {
    setModalOrderDetailsOpen(true)
    dispatch(getOrderDate(orderIngredients()))
  };

  const getConstructorIngredientSum  = (ingredients) => {
    if(ingredients === undefined) {
      return 0 ;
    }else if (ingredients.length === 0) {
      return 0;
    } else {
      return ingredients.reduce((acc, curr) => {return acc + curr.price;}, 0);
    }
  };

  const getBurgerOrderSum  = (ingredients, bun) => {
    let ingredientsSum = getConstructorIngredientSum(ingredients)
    let bunSum = bun.price * 2
    return ingredientsSum + bunSum
  };

  function closeModal () {
    setModalOrderDetailsOpen(false)
  }

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(ingredient) {
      if (ingredient.type !== "bun") {
        dispatch(addConstructorIngredient(ingredient))
      } else {
        dispatch(setConstructorBun(ingredient))
      }
    },
  });

  return (
    <>
      <section className={`${burgerConstructorStyles.elements} pt-25 mb-10`}>
        <div className={`${burgerConstructorStyles.burger} mb-10`} ref={dropTarget}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${constructorBun.name} (верх)`}
            price={constructorBun.price}
            thumbnail={constructorBun.image}
            extraClass="mr-5"
          />
          <ul className={`${burgerConstructorStyles.list} mb-4 mt-4 pr-2 custom-scroll`}>
            {constructorIngredients.map((ingredient, index) => 
              <ConstructorIngredient
                ingredient={ingredient}
                key={ingredient.uuid}
                index={index}
              />
            )}
          </ul>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${constructorBun.name} (низ)`}
            price={constructorBun.price}
            thumbnail={constructorBun.image}
            extraClass="mr-5"
          />
        </div>
        <div className={`${burgerConstructorStyles.container} pr-4`}>
          <p className={`${burgerConstructorStyles.count} mr-10 text text_type_digits-medium`}>
            {getBurgerOrderSum(constructorIngredients, constructorBun)}
            <CurrencyIcon className={burgerConstructorStyles.container}/>
          </p>
          <Button htmlType="button" type="primary" size="large" onClick={handleOrderSubmit}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {isModalOrderDetailsOpen && (
        <Modal onClose={closeModal} isOpen={isModalOrderDetailsOpen}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;