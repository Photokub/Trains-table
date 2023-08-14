import {CLEAR_DATA, SET_INPUTS_ARRAY} from "../constants/constants";

export const initialState = []

export function inputsArrayReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_INPUTS_ARRAY:
            return {...state, inputs: action.payload};

        case CLEAR_DATA:
            return initialState;

        default:
            return state;
    }
}