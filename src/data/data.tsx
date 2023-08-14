import {JSON_TRAINS_ARRAY_URL} from '../constants/constants'
const url = JSON_TRAINS_ARRAY_URL
export const trainsArray = await (await fetch(url)).json();
