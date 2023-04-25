import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header"
import Main from "../main/main";
import appStyles from "./app.module.css";
import * as api from '../../utils/Api';

import { useDispatch } from 'react-redux';
import { loadInitialIngredients } from "../../services/actions/initial-ingredients";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialIngredients ())
  }, [])

  return (
    <div className="page text text_type_main-default">
      <AppHeader />
      <Main/>
    </div>
  );
}

export default App;
