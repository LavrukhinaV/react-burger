import { store } from '../store';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TAuthActions } from "../actions/auth";
import { TBurgerConstructorActions } from "../actions/burger-constructor";
import { TOrderDetailsActions } from "../actions/order-details";
import { TSelectedIngredientActions } from "../actions/selected-ingredient";
import { TInitialIngredientsActions } from "../actions/initial-ingredients";
import { TWSActions } from "../actions/ws";

export type TApplicationActions = 
TAuthActions
| TBurgerConstructorActions
| TOrderDetailsActions
| TSelectedIngredientActions
| TInitialIngredientsActions
| TWSActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

