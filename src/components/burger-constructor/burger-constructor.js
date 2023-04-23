import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState,   useEffect } from "react";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { getOrderDate } from "../../services/actions/order-details";
import { useDispatch, useSelector } from 'react-redux';
import ConstructorIngridient from "../constructor-ingridient/constructor-ingridient";
import { useDrop } from "react-dnd";
import { addConstructorIngridient, setConstructorBun } from "../../services/actions/burger-constructor";

function BurgerConstructor () {
  const dispatch = useDispatch();
  const constructorIngridients = useSelector(state => state.burgerConstructor.ingridients);
  const constructorBun = useSelector(state => state.burgerConstructor.bun);

  const [isModalOrderDetailsOpen, setModalOrderDetailsOpen] = useState(false);

  const orderIngredients = () => {
    const allIngredients = [
        ...Array(2).fill(constructorBun._id),
        ...constructorIngridients.map(item => item._id)
    ]
    return allIngredients
  }

  function handleOrderSubmit() {
    setModalOrderDetailsOpen(true)
    dispatch(getOrderDate(orderIngredients()))
  };

  const getConstructorIngridientSum  = (ingridients) => {
    if(ingridients === undefined) {
      return 0 ;
    }else if (ingridients.length === 0) {
      return 0;
    } else {
      return ingridients.reduce((acc, curr) => {return acc + curr.price;}, 0);
    }
  };

  const getBurgerOrderSum  = (ingridients, bun) => {
    let ingridientsSum = getConstructorIngridientSum(ingridients)
    let bunSum = bun.price * 2
    return ingridientsSum + bunSum
  };

  function closeModal () {
    setModalOrderDetailsOpen(false)
  }

  const [, dropTarget] = useDrop({
    accept: "ingridients",
    drop(ingridient) {
      if (ingridient.type !== "bun") {
        dispatch(addConstructorIngridient(ingridient))
      } else {
        dispatch(setConstructorBun(ingridient))
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
            {constructorIngridients.map((ingridient, index) => 
              <ConstructorIngridient ingridient={ingridient} key={index}/>
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
            {getBurgerOrderSum(constructorIngridients, constructorBun)}
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