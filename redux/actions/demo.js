import { ACTION_DEMO_ADD } from "../../constants/demo";

export const demo = (text) => {
    return {
        type: ACTION_DEMO_ADD,
        text
    }
}