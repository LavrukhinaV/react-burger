import { RootState } from "../types/types";

export const getInitialIngredients = (state: RootState) => state.ingredients.ingredients;