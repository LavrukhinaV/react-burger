import { DELETE_SELECTED_INGREDIENT, SET_SELECTED_INGREDIENT } from '../constants/selected-ingredient';
import { selectedIngredientReduser, selectedIngredientState } from './selected-ingredient';

const ingredient = {
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

describe('selected ingredient reduser', () => {
  it('should return the initial state', () => {
    expect(selectedIngredientReduser(undefined, {})).toEqual(selectedIngredientState)
  })

  it('should hadle SET_SELECTED_INGREDIENT', () => {
    expect(
      selectedIngredientReduser(selectedIngredientState, {
        type: SET_SELECTED_INGREDIENT,
        ingredient: ingredient
      })
    ).toEqual(
      {
        selectedIngredient: ingredient
      }
    )
  })

  it('should hadle DELETE_SELECTED_INGREDIENT', () => {
    expect(
      selectedIngredientReduser(
        selectedIngredientState,
        {
          type: DELETE_SELECTED_INGREDIENT,
        }
      )
    ).toEqual(selectedIngredientState)
  })
})