import { all } from "redux-saga/effects"
import demo from "./demo" // remove this in your app

export default function* rootSaga() {
    yield all([...demo])
}