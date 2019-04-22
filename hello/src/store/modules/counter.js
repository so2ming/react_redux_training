import { createAction } from 'redux-actions';
import {  handleActions } from 'redux-actions';

// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수 (type으로! -> store )
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });
// createAction 함수 사용할 경우
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);


// 초기상태 정의
const initialState = {
    number: 0
};

// 리듀서 만들기
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number +1};
    },
    [DECREMENT]: ({number}) => ({number:number -1})
}, initialState);
