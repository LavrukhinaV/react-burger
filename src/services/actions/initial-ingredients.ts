import { getIngredients } from "../../utils/Api";
import { AppDispatch, AppThunkAction } from "../types/types";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from "../constants/initial-ingredients";
import { TIngredientData } from "../../utils/types";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly paylod: Array<TIngredientData>;
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TInitialIngredientsActions = 
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed

export const loadInitialIngredients = (): AppThunkAction => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  })

  getIngredients().then(res => {

    console.log('res', res)
    dispatch({
      type: GET_INGREDIENTS_SUCCESS,
      paylod: res,
    })
  })
  .catch((err) => {
    dispatch({
      type: GET_INGREDIENTS_FAILED,
    })
  });
};
