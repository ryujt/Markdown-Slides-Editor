import { call, put, select, takeEvery } from "redux-saga/effects";

import * as pages from "@/api/pages";
import {
  ACTION_ADD_SLIDE_PAGE,
  ACTION_ADD_SLIDE_PAGE_SUC,
  ACTION_FETCH_PAGE_TEMPLATES,
  ACTION_FETCH_PAGE_TEMPLATES_SUC,
} from "@/constants/pages";

const newId = (() => {
  let counter = 0;
  return () => {
    return counter++;
  };
})();

function* addPage({ markdown }) {
  const { pages } = yield select((state) => state.pages);
  yield put({
    type: ACTION_ADD_SLIDE_PAGE_SUC,
    payload: [
      ...pages,
      {
        markdown,
        id: newId(),
      },
    ],
  });
}

function* fetchTemplates() {
  const { templates } = yield call(pages.fetchTemplates);
  if (templates) {
    yield put({
      type: ACTION_FETCH_PAGE_TEMPLATES_SUC,
      payload: templates,
    });
  }
}

export default [
  takeEvery(ACTION_ADD_SLIDE_PAGE, addPage),
  takeEvery(ACTION_FETCH_PAGE_TEMPLATES, fetchTemplates),
];
