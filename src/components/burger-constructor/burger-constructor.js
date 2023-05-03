import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useMemo } from "react";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { getOrderDate } from "../../services/actions/order-details";
import { useDispatch, useSelector } from 'react-redux';
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";
import { useDrop } from "react-dnd";
import { addConstructorIngredient, setConstructorBun } from "../../services/actions/burger-constructor";
import { getConstructorIngredients, getConstructorBun } from "../../services/selectors/burger-constructor";

function BurgerConstructor () {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(getConstructorIngredients);
  const constructorBun = useSelector(getConstructorBun);

  const [isModalOrderDetailsOpen, setModalOrderDetailsOpen] = useState(false);

  function closeModal () {
    setModalOrderDetailsOpen(false)
  };

  const orderIngredients = () => {
    const allIngredients = [
      constructorBun._id,
      ...constructorIngredients.map(item => item._id),
      constructorBun._id
    ]
    return allIngredients
  };

  const price = useMemo(() => {
    if( constructorIngredients  && constructorBun) 
    return (
      (
        constructorIngredients.reduce((acc, curr) => {return acc + curr.price;}, 0) +
        constructorBun.price * 2
      )
    )
  }, [constructorIngredients, constructorBun]);


  function handleOrderSubmit() {
    dispatch(getOrderDate(orderIngredients()));
    setModalOrderDetailsOpen(true);
  };

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
        {constructorBun && <ConstructorElement
            type="top"
            isLocked={true}
            text={`${constructorBun.name} (верх)`}
            price={constructorBun.price}
            thumbnail={constructorBun.image}
          />}
          
          <ul className={`${burgerConstructorStyles.list} mb-4 mt-4 pr-2 custom-scroll`}>
            {constructorIngredients.map((ingredient, index) => 
              <ConstructorIngredient
                ingredient={ingredient}
                key={ingredient.uuid}
                index={index}
              />
              )
            }
          </ul>
          {constructorIngredients.length === 0 && !constructorBun && 
          <p className={`${burgerConstructorStyles.note} text text_type_main-medium`}>Перенесите ингдиенты в конструктор</p>
          }
          {constructorBun && <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${constructorBun.name} (низ)`}
            price={constructorBun.price}
            thumbnail={constructorBun.image}
          />}
        </div>
        <div className={`${burgerConstructorStyles.container} pr-4`}>
          <p className={`${burgerConstructorStyles.count} mr-10 text text_type_digits-medium`}>
            {price}
            <CurrencyIcon className={burgerConstructorStyles.container}/>
          </p>
          <Button disabled={constructorIngredients.length === 0 || !constructorBun} htmlType="button" type="primary" size="large" onClick={handleOrderSubmit}>
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