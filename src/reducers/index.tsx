import {combineReducers} from 'redux';
import {trainsArrayReducer} from "./trainsArray";
import {trainReducer} from "./train";
import {inputsArrayReducer} from "./inputsArray";

export const rootReducer = combineReducers({
    trainsArray: trainsArrayReducer,
    train: trainReducer,
    inputs: inputsArrayReducer,
});

