import {SET_TRAIN} from "../constants/constants";

export function setTrain(train: object){
    return {
        type: SET_TRAIN,
        payload: train,
    };
}