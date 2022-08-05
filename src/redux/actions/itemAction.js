import { createAction } from "redux-actions";

// Action Type
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_ITEM = "FETCH_ITEM";

export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAILURE = "FETCH_LIST_FAILURE";

export const FETCH_ITEM_LIST = "FETCH_ITEM_LIST";

// Action Creator
export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e);
export const fetchItem = createAction(FETCH_ITEM, (itemId) => itemId);

export const fetchListSuccess = createAction(
  FETCH_LIST_SUCCESS,
  (data) => data
);
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e);

export const fetchItemList = createAction(FETCH_ITEM_LIST);
