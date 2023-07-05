import { store } from "../../index";
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TAuthActions } from "../actions/auth";
import { TBurgerConstructorActions } from "../actions/burger-constructor";
import { TOrderDetailsActions } from "../actions/order-details";
import { TSelectedIngredientActions } from "../actions/selected-ingredient";
import { TInitialIngredientsActions } from "../actions/initial-ingredients";

type TApplicationActions = TAuthActions | TBurgerConstructorActions | TOrderDetailsActions | TSelectedIngredientActions | TInitialIngredientsActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

