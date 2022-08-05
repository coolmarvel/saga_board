import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from "../actions/itemAction";
import { handleActions } from "redux-actions";

// 모듈의 초기 상태
const initialState = {
  item: null, // 하나의 상품 정보
  items: [], // 상품 목록
  error: null, // 응답에러 정보
};

// 리듀서 함수 정의
// 리듀서는 상태변화를 일으키는 함수이다.
const item = handleActions(
  {
    // 상세 조회 상태 변경
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      item: action.payload,
    }),
    [FETCH_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    // 목록 조회 상태 변경
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default item;
