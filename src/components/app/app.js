import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header"
import Main from "../main/main";
import appStyles from "./app.module.css";
import * as api from '../../utils/Api';

import { useDispatch } from 'react-redux';
import { loadInitialIngridients } from "../../services/actions/initialIngridients";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialIngridients ())
  }, [])

  return (
    <div className="page text text_type_main-default">
      <AppHeader />
      <Main/>
    </div>
  );
}

export default App;
