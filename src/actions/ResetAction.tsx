import {CLEAR_DATA} from "../constants/constants";

export function ClearStore() {
    return {
        type: CLEAR_DATA,
    };
}