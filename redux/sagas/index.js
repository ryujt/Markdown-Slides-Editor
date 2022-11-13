import { all } from "redux-saga/effects";
import pages from "./pages"; // remove this in your app

export default function* rootSaga() {
  yield all([...pages]);
}
