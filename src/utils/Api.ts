import { TIngredientData, TOrderData } from "./types";

export const BASE_URL = 'https://norma.nomoreparties.space/api';

const checkSuccess = (
  data: { success: string; data: any },
  returnData: any
) => {
  return data.success
    ? returnData
    : () => {
        throw new Error("Произошла ошибка");
      };
};

export const checkResponse = (res: Response) => {
  return res.ok
  ? res.json()
  : res.json().then((err) => {
    throw new Error(
      `Произошла ошибка: ${JSON.stringify(err)}`
    );
    })
};

export const getIngredients = async (): Promise<TIngredientData[]> => {
  const res = await fetch(`${BASE_URL}/ingredients`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  const data = await checkResponse(res);
  return checkSuccess(data, data.data);
};

export const submitOrder = async (ingredients: Array<TIngredientData>): Promise<TOrderData> => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: ingredients
    })
  });
  return await checkResponse(res);
};