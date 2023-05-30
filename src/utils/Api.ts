import { TIngredientData, TOrderData } from "./types";

export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const checkResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return await res.json();
  }
  let response = await res.json()
  return Promise.reject(`${response.message}`);
};

export const getIngredients = (): Promise<TIngredientData[]> => {
  return fetch(`${BASE_URL}/ingredients`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(res => checkResponse<TIngredientData[]>(res))
};

export const submitOrder = (ingredients: Array<TIngredientData>): Promise<TOrderData> => {
  return fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: ingredients
    })
  })
  .then(res => checkResponse<TOrderData>(res))
};