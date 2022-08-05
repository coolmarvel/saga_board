import {
  START_LOADING,
  END_LOADING,
} from "../actions/loadingAction";
import { handleActions } from "redux-actions";

// init states - 모듈의 초기 상태 설정
const initialState = {};

// definite reducer function
// redux의 액션의 type에 따른 작업 - if문 또는 switch 문을 아래로 대체
// 해당 액션별 로딩 시작/끝 상태를 설정한다.
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [END_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
