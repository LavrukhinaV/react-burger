import { RootState } from "../types/types";
export const getSelectedIngredient = (state: RootState) => state.ingredient.selectedIngredient;
