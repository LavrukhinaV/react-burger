import { RootState } from "../types/types";

export const getFeedOrders = (state: RootState) => state.feed.orders;
export const getFeedTotalOrders = (state: RootState) => state.feed.total;
export const getFeedTotalTodayOrders = (state: RootState) => state.feed.totalToday;