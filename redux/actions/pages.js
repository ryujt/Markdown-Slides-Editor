import {
  ACTION_ADD_SLIDE_PAGE,
  ACTION_ADD_SLIDE_PAGE_SUC,
  ACTION_DELETE_SLIDE_PAGE,
  ACTION_EDIT_SLIDE_PAGE,
  ACTION_FETCH_PAGE_TEMPLATES,
} from "constants/pages";
import { actionFactory } from "helpers/reduxActions";

export const addPage = actionFactory(ACTION_ADD_SLIDE_PAGE);
export const deletePage = actionFactory(ACTION_DELETE_SLIDE_PAGE);
export const fetchTemplates = actionFactory(ACTION_FETCH_PAGE_TEMPLATES);
export const editPage = actionFactory(ACTION_EDIT_SLIDE_PAGE);

export const setPages = actionFactory(ACTION_ADD_SLIDE_PAGE_SUC);
