/*
    包含n个reducer函数（根据老的state和action返回一个新的state）
 */
import {combineReducers} from "redux"; //合并多个函数
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS,DECREMENT,INCREMENT} from "./action-types";

const initComments = []

//评论管理
function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            //过滤掉index为传入的index，filter不会改变原来列表，只是在原来列表上进行修改
            return state.filter((comment, index) => index !== action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state;
    }
}

export function counter(state = 0, action) {

    console.log('counter()', state, action)

    switch (action.type) {
        case INCREMENT:
            return state + action.data

        case DECREMENT:
            return state - action.data

        default:
            return state;
    }

}

//redux向外暴露的state是一个对象{comments:[],counter:0}
export default combineReducers({
    comments,//指定reducer属性
    counter
})