import { takeEvery, put, select } from "redux-saga/effects";
import { ACTION_DEMO_ADD, ACTION_DEMO_ADD_SUC } from "../../constants/demo";

let counter = 0;

function* add({ text }) {
  const { items } = yield select((state) => state.demo);
  yield put({
    type: ACTION_DEMO_ADD_SUC,
    payload: [
      ...items,
      {
        text,
        id: counter++,
      },
    ],
  });
}

export default [takeEvery(ACTION_DEMO_ADD, add)];
