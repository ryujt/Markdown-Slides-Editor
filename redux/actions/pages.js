import {
  ACTION_ADD_SLIDE_PAGE,
  ACTION_EDIT_SLIDE_PAGE,
  ACTION_FETCH_PAGE_TEMPLATES,
} from "@/constants/pages";
import { actionFactory } from "@/helpers/reduxActions";

export const addPage = actionFactory(ACTION_ADD_SLIDE_PAGE);
export const fetchTemplates = actionFactory(ACTION_FETCH_PAGE_TEMPLATES);
export const editPage = actionFactory(ACTION_EDIT_SLIDE_PAGE);
