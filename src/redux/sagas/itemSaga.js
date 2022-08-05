import {
  FETCH_ITEM,
  FETCH_ITEM_LIST,
  fetchSuccess,
  fetchFailure,
  fetchListSuccess,
  fetchListFailure,
} from "../actions/itemAction";
import { startLoading, endLoading } from "../actions/loadingAction";
import { fetchItemAPI, fetchItemListAPI } from "../../lib/api";
import { takeLatest, call, put } from "redux-saga/effects";

// 상품 상세정보를 조회하는 태스크
function* fetchItemSaga(action) {
  yield put(startLoading(FETCH_ITEM));
  try {
    const response = yield call(fetchItemAPI, action.payload);
    yield put(fetchSuccess(response.data));
  } catch (e) {
    yield put(fetchFailure(e));
  }
  yield put(endLoading(FETCH_ITEM));
}

// 상품 목록을 조회하는 태스크
function* fetchItemListSaga() {
  yield put(startLoading(FETCH_ITEM_LIST));
  try {
    const response = yield call(fetchItemListAPI);
    yield put(fetchListSuccess(response.data));
  } catch (e) {
    yield put(fetchListFailure(e));
  }
  yield put(endLoading(FETCH_ITEM_LIST));
}

// 상품 saga 함수 작성
export function* itemSaga() {
  // 상세조회 태스크
  yield takeLatest(FETCH_ITEM, fetchItemSaga);
  // 목록 조회 태스크 수행
  yield takeLatest(FETCH_ITEM_LIST, fetchItemListSaga);
}
