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
  email: string,
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

export type TFeedOrder= {
  ingredients: Array<string>,
  _id: string,
  name: string,
  status: OrderStatus,
  number: number,
  createdAt: string,
  updatedAt: string
}

export type TFeedOrders = {
  success: boolean,
  orders: Array<TFeedOrder>,
  total: number,
  totalToday: number
}

export enum OrderStatus {
  done = 'done',
  pending = 'pending'
}

export function formatOrderStatus(orderStatus: OrderStatus): string {
  switch (orderStatus) {
    case OrderStatus.done:
      return 'Выполнен'
    case OrderStatus.pending:
      return 'Создан'
  }
}

export enum WebsocketStatus {
  CONNECTING = 'CONNECTING...',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
}