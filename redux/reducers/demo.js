import produce from "immer";
import { ACTION_DEMO_ADD_SUC } from "../../constants/demo";
const initialState = {
    items: []
}

const todo = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case ACTION_DEMO_ADD_SUC:
            draft.items = action.payload;
            break
        default:
            break
    }
})


export default todo;