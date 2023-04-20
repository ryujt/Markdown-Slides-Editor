import * as pages from "api/pages";
import {
  ACTION_ADD_SLIDE_PAGE,
  ACTION_ADD_SLIDE_PAGE_SUC,
  ACTION_EDIT_SLIDE_PAGE,
  ACTION_EDIT_SLIDE_PAGE_SUC,
  ACTION_FETCH_PAGE_TEMPLATES,
  ACTION_FETCH_PAGE_TEMPLATES_SUC,
} from "constants/pages";
import { call, put, select, takeEvery } from "redux-saga/effects";

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

function* editPage({ markdown, id }) {
  const { pages } = yield select((state) => state.pages);
  yield put({
    type: ACTION_EDIT_SLIDE_PAGE_SUC,
    payload: pages.map((page) => {
      if (page?.id === id) {
        return {
          ...page,
          markdown,
          id,
        };
      } else {
        return { ...page };
      }
    }),
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
  takeEvery(ACTION_EDIT_SLIDE_PAGE, editPage),
  takeEvery(ACTION_FETCH_PAGE_TEMPLATES, fetchTemplates),
];
