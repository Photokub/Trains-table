import { SET_TRAIN, CLEAR_DATA } from "../constants/constants";

const initialState = {
    train:
        {
        name: '',
        description: '',
        characteristics: []
    }
};

export function trainReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_TRAIN:
            return {...state, train: action.payload};

        case CLEAR_DATA:
            return initialState;

        default:
            return state;
    }
}