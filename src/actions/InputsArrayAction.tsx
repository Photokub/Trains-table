import {SET_INPUTS_ARRAY} from "../constants/constants";

export function setInputArray(inputsArray: object){
    return {
        type: SET_INPUTS_ARRAY,
        payload: inputsArray,
    };
}