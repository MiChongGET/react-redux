/*
    包含所有action creator
 */
//增加
import {DECREMENT, INCREMENT} from "./action-type";

export const increment = (number) => ({type: INCREMENT, data: number})
export const decrement = (number) => ({type: DECREMENT, data: number})
