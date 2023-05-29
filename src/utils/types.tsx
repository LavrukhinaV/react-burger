export type TIngredientData = {
  _id: string,
  calories: number,
  carbohydrates: number,
  fat: number,
  image: string,
  image_large: string,
  image_mobile: string,
  name: string,
  price: number,
  proteins: number,
  type: string,
};

export type TIngredientDataWithUUId  = TIngredientData & {
  uuid: string
};

export type TLink = {
  title: string,
  linkName: string,
  path: string,
};

export type TUserData = {
  name: string,
  email: string,
}

export type TFullUserData = TUserData & {
  password: string,
}

export type TAuthData = {
  name: string,
  password: string,
}

export type TFormValue = {
  [key: string]: string
};

export type TOrderData = {
  name: string,
  order: {
    number: 6257
  },
  success: boolean
};

export type TTokensData = {
  accessToken: string,
  refreshToken: string,
}