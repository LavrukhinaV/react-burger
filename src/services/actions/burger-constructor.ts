import { TIngredientData, TIngredientDataWithUUId } from "../../utils/types";

import { 
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SET_CONSTRUCTOR_BUN,
  REMOVE_CONSTRUCTOR
} from "../constants/burger-constructor";

export interface IUpdateConstructorIngredient {
  payload: any;
  readonly type: typeof UPDATE_CONSTRUCTOR_INGREDIENTS;
}

export interface IDeleteConstructorIngredient {
  ingredient: any;
  readonly type: typeof DELETE_CONSTRUCTOR_INGREDIENT;
}

export interface IRemoveConstructorIngredient {
  readonly type: typeof REMOVE_CONSTRUCTOR;
}

export interface IAddConstructorIngredient {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
  readonly ingredient: TIngredientDataWithUUId
}

export interface ISetConstructorBun {
  readonly type: typeof SET_CONSTRUCTOR_BUN;
  readonly bun: TIngredientData
}

export type TBurgerConstructorActions = 
  | IUpdateConstructorIngredient
  | IRemoveConstructorIngredient
  | IDeleteConstructorIngredient
  | IAddConstructorIngredient
  | ISetConstructorBun

export const addConstructorIngredient = (ingredient: TIngredientData): IAddConstructorIngredient => {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    ingredient: {
      ...ingredient,
      uuid: crypto.randomUUID()
    }
  }
};

export const setConstructorBun = (bun: TIngredientData): ISetConstructorBun => {

  return {
    type: SET_CONSTRUCTOR_BUN,
    bun
  }
};