import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header"
import Main from "../main/main";
import IngredientDetails from "../ingredient-details/ingredientDetails";
import OrderDetails from "../order-details/orderDetails";
import appStyles from "./app.module.css";
import * as api from '../../utils/Api'

function App() {
  const [initialIngridients, setInitiaIngridients] = useState([]);

  useEffect(() => {
    api.getIngridients()
      .then(({isSuccess, data}) => {
        setInitiaIngridients(data)
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [])

  const [isModalOrderDetailsOpen, setModalOrderDetailsOpen] = useState(false);

  const [selectedIngredient, setSelectedIngredient] = useState({});

  function closeAllModals() {
    setModalOrderDetailsOpen(false)
    setSelectedIngredient({})
  }

  function handleOrderSubmit() {
    setModalOrderDetailsOpen(true)
  };

  function handleIngredientClick(ingridient) {
    setSelectedIngredient(ingridient)
  }

  return (
    <>
      <div className="page text text_type_main-default">
        <AppHeader />
        <Main
          onIngredientClick = {handleIngredientClick}
          onSubmitOrder = {handleOrderSubmit}
          initialIngridients={initialIngridients}
        />
      </div>
      <IngredientDetails
        isOpen={!!selectedIngredient.name}
        ingridient={selectedIngredient}
        onClose={closeAllModals}
      />
      <OrderDetails
        isOpen={isModalOrderDetailsOpen}
        onClose={closeAllModals}
      />
    </>
  );
}

export default App;
