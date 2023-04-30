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

import { pareMarkdownToHtml } from "../../helpers/markdown";

const newId = (() => {
  let counter = 0;
  return () => {
    return counter++;
  };
})();

function* addPage({ markdown }) {
  const { pages } = yield select((state) => state.pages);

  const newPages = [
    ...pages,
    {
      markdown,
      id: newId(),
    },
  ];
  const html = yield call(convertPageToHtml, newPages);
  yield put({
    type: ACTION_ADD_SLIDE_PAGE_SUC,
    payload: {
      pages: newPages,
      html,
    },
  });
}

function* editPage({ markdown, id }) {
  const { pages } = yield select((state) => state.pages);

  const newPages = pages.map((page) => {
    if (page?.id === id) {
      return {
        ...page,
        markdown,
        id,
      };
    } else {
      return { ...page };
    }
  });
  const html = yield call(convertPageToHtml, newPages);
  yield put({
    type: ACTION_EDIT_SLIDE_PAGE_SUC,
    payload: {
      pages: newPages,
      html,
    },
  });
}

function* fetchTemplates() {
  const { templates: raws } = yield call(pages.fetchTemplates);
  const keys = Object.keys(raws);

  const templates = {};
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    templates[key] = {
      raw: raws[key],
      html: yield call(pareMarkdownToHtml, raws[key]),
    };
  }

  yield put({
    type: ACTION_FETCH_PAGE_TEMPLATES_SUC,
    payload: templates,
  });
}

function* convertPageToHtml(pages) {
  const markdowns = pages.map((data) => data?.markdown);
  const wholeMarkdown = markdowns.join("\n---\n");
  const html = yield call(pareMarkdownToHtml, wholeMarkdown);
  return html;
}

export default [
  takeEvery(ACTION_ADD_SLIDE_PAGE, addPage),
  takeEvery(ACTION_EDIT_SLIDE_PAGE, editPage),
  takeEvery(ACTION_FETCH_PAGE_TEMPLATES, fetchTemplates),
];
