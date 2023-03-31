import React from 'react';
import burgerConstructorStyles from './burgerConstructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from "../../ utils/data";

const img = "https://code.s3.yandex.net/react/code/bun-02.png"

class BurgerConstructor extends React.Component {
  render() {
    return (
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
            {data.map((ingridient) => 
              <li key={ingridient._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingridient.name}
                  price={ingridient.price}
                  thumbnail={ingridient.image}
                />
              </li>
            )}
          </ul>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
            extraClass="mr-5"
          />
        </div>
        <div className={`${burgerConstructorStyles.container} pr-4`}>
          <p className={`${burgerConstructorStyles.count} mr-10 text text_type_digits-medium`}>
            610
            <CurrencyIcon className={burgerConstructorStyles.container} style={{ width: "33px"}}/>
          </p>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }
}
export default BurgerConstructor;