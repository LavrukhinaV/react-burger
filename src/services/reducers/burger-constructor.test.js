import { constructorReduser, constructorInitialState } from "./burger-constructor";
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SET_CONSTRUCTOR_BUN,
  REMOVE_CONSTRUCTOR
} from "../constants/burger-constructor";

const firstIngredient = {
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

const secondIngredient = {
  _id: "60666c42cc7b410027a1a9b5",
  name: "Говяжий метеорит (отбивная)",
  type: "main",
  proteins: 800,
  fat: 800,
  carbohydrates: 300,
  calories: 2674,
  price: 3000,
  image: "https://code.s3.yandex.net/react/code/meat-04.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
  __v: 0,
}

describe('constructor reduser', () => {
  it('should return the initial state', () => {
    expect(constructorReduser(undefined, {})).toEqual(constructorInitialState)
  })

  it('should hadle UPDATE_CONSTRUCTOR_INGREDIENTS', () => {
    expect(
      constructorReduser({
        ...constructorInitialState,
        ingredients: [firstIngredient, secondIngredient]
      }, {
        type: UPDATE_CONSTRUCTOR_INGREDIENTS,
        payload: {from: 1, to: 0}
      })
    ).toEqual(
      {
        ingredients: [secondIngredient, firstIngredient],
        bun: null
      }
    )
  })

  it('should hadle ADD_CONSTRUCTOR_INGREDIENT', () => {
    expect(
      constructorReduser(constructorInitialState, {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        ingredient: firstIngredient
      })
    ).toEqual(
      {
        ingredients: [firstIngredient],
        bun: null
      }
    )
  })

  it('should hadle DELETE_CONSTRUCTOR_INGREDIENT', () => {
    expect(
      constructorReduser(constructorInitialState, {
        type: DELETE_CONSTRUCTOR_INGREDIENT,
        ingredient: firstIngredient
      })
    ).toEqual(
      {
        ingredients: [],
        bun: null
      }
    )
  })

  it('should hadle SET_CONSTRUCTOR_BUN', () => {
    expect(
      constructorReduser(constructorInitialState, {
        type: SET_CONSTRUCTOR_BUN,
        bun: firstIngredient
      })
    ).toEqual(
      {
        ingredients: [],
        bun: firstIngredient
      }
    )
  })

  it('should hadle REMOVE_CONSTRUCTOR', () => {
    expect(
      constructorReduser(constructorInitialState, {
        type: REMOVE_CONSTRUCTOR,
      })
    ).toEqual(
      {
        ingredients: [],
        bun: null
      }
    )
  })

})