import {
  ACTION_ADD_SLIDE_PAGE_SUC,
  ACTION_EDIT_SLIDE_PAGE_SUC,
  ACTION_FETCH_PAGE_TEMPLATES_SUC,
} from "constants/pages";
import produce from "immer";

const initialState = {
  html: null,
  pages: [],
  templates: null,
};

const pages = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION_ADD_SLIDE_PAGE_SUC:
      case ACTION_EDIT_SLIDE_PAGE_SUC:
        draft.pages = action.payload.pages;
        draft.html = action.payload.html;

        break;

      case ACTION_FETCH_PAGE_TEMPLATES_SUC:
        draft.templates = action.payload;
        break;

      default:
        break;
    }
  });

export default pages;
