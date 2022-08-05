import { createAction } from "redux-actions";

// action type (액션 상수 타입 정의)
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

// create action function
// 로딩 시작/끝 액션 함수를 만들고 외부에서 사용할 수 있도록 공개한다.
export const startLoading = createAction(
  START_LOADING,
  (actionType) => actionType
);
export const endLoading = createAction(END_LOADING, (actionType) => actionType);
