import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useMemo } from "react";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { getOrderDate } from "../../services/actions/order-details";
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";
import { useDrop } from "react-dnd";
import { addConstructorIngredient, setConstructorBun } from "../../services/actions/burger-constructor";
import { getConstructorIngredients, getConstructorBun } from "../../services/selectors/burger-constructor";
import { getUser } from "../../services/selectors/auth";
import { useNavigate } from "react-router-dom";
import { TIngredientData, TIngredientDataWithUUId } from '../../utils/types';

function BurgerConstructor () {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const user = useSelector(getUser);

  const constructorIngredients: Array<TIngredientDataWithUUId> = useSelector(getConstructorIngredients);
  const constructorBun = useSelector(getConstructorBun);

  const [isModalOrderDetailsOpen, setModalOrderDetailsOpen] = useState(false);

  function closeModal () {
    setModalOrderDetailsOpen(false)
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
    if (user.name || constructorIngredients.length === 0) {
      if (constructorBun) {
        const allIngredients = [
        constructorBun._id,
        ...constructorIngredients.map(item => item._id),
        constructorBun._id

      ]
      dispatch(getOrderDate(allIngredients));
      setModalOrderDetailsOpen(true);
    }
    } else {
      navigate("/login")
    }
  };

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(ingredient: TIngredientData) {
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
          <p className={`${burgerConstructorStyles.note} text text_type_main-medium`}>Перенесите ингредиенты в конструктор</p>
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
            <CurrencyIcon type="primary"/>
          </p>
          <Button disabled={constructorIngredients.length === 0 || !constructorBun} htmlType="button" type="primary" size="large" onClick={handleOrderSubmit}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {isModalOrderDetailsOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;