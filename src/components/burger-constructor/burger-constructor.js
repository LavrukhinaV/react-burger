import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState,   useEffect } from "react";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { getOrderDate } from "../../services/actions/orderDetails";
import { useDispatch, useSelector } from 'react-redux';

const img = "https://code.s3.yandex.net/react/code/bun-02.png"

function BurgerConstructor () {
  const dispatch = useDispatch();

  const [isModalOrderDetailsOpen, setModalOrderDetailsOpen] = useState(false);

  function handleOrderSubmit() {
    setModalOrderDetailsOpen(true)
    dispatch(getOrderDate(["643d69a5c3f7b9001cfa093c","643d69a5c3f7b9001cfa0941", "643d69a5c3f7b9001cfa093c"]))
  };

  function closeModal () {
    setModalOrderDetailsOpen(false)
  }

  return (
    <>
      <section className={`${burgerConstructorStyles.elements} pt-25 mb-10`}>
        <div className={`${burgerConstructorStyles.burger} mb-10`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
            extraClass="mr-5"
          />
          <ul className={`${burgerConstructorStyles.list} mb-4 mt-4 pr-2 custom-scroll`}>
          </ul>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
            extraClass="mr-5"
          />
        </div>
        <div className={`${burgerConstructorStyles.container} pr-4`}>
          <p className={`${burgerConstructorStyles.count} mr-10 text text_type_digits-medium`}>
            610
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