import { RootState } from "../types/types";
export const getUser = (state: RootState) => state.user.user;
export const isAuth = (state: RootState) => state.user.isAuthChecked;