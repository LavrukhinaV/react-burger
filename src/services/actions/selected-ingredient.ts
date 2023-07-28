import { TIngredientData } from "../../utils/types";
import { SET_SELECTED_INGREDIENT, DELETE_SELECTED_INGREDIENT } from "../constants/selected-ingredient";

export interface ISetSelectedIngredient {
  ingredient: TIngredientData;
  readonly type: typeof SET_SELECTED_INGREDIENT;
};

export interface IDeleteSelectedIngredient {
  ingredient: TIngredientData;
  readonly type: typeof DELETE_SELECTED_INGREDIENT;
};

export type TSelectedIngredientActions = 
  | ISetSelectedIngredient
  | IDeleteSelectedIngredient