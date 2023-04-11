import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header"
import Main from "../main/main";
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

  return (
    <div className="page text text_type_main-default">
      <AppHeader />
      <Main
        initialIngridients={initialIngridients}
      />
    </div>
  );
}

export default App;
