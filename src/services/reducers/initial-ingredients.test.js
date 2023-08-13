import { initialIngredientsReduser, initialIngredientsState } from "./initial-ingredients"
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../constants/initial-ingredients"

export const initialIngredients = [
  {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  }
]

describe('initial ingredients reduser', () => {
  it('should return the initial state', () => {
    expect(initialIngredientsReduser(undefined, {})).toEqual(initialIngredientsState)
  })

  it('should hadle GET_INGREDIENTS_SUCCESS', () => {
    expect(
      initialIngredientsReduser(initialIngredientsState, {
        type: GET_INGREDIENTS_SUCCESS,
        payload: initialIngredients
      })
    ).toEqual(
      {
        ingredients: initialIngredients,
        ingredientsRequestSuccess: true,
        ingredientsRequestFailed: false,
      }
    )
  })

  it('should hadle GET_INGREDIENTS_REQUEST', () => {
    expect(
      initialIngredientsReduser(initialIngredientsState, {
        type: GET_INGREDIENTS_REQUEST,
      })
    ).toEqual(
      {
        ingredients: [],
        ingredientsRequestSuccess: true,
        ingredientsRequestFailed: false,
      }
    )
  })

  it('should hadle GET_INGREDIENTS_FAILED', () => {
    expect(
      initialIngredientsReduser(initialIngredientsState, {
        type: GET_INGREDIENTS_FAILED,
      })
    ).toEqual(
      {
        ingredients: [],
        ingredientsRequestSuccess: false,
        ingredientsRequestFailed: true,
      }
    )
  })

})