import { RootState } from "../types/types";

export const getConstructorIngredients = (state: RootState) => state.burgerConstructor.ingredients;
export const getConstructorBun = (state: RootState) => state.burgerConstructor.bun;
