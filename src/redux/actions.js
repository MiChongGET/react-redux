/*
    包含了所有的action creator（action的工厂函数）
 */

import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from "./action-types";

//同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

//同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

//同步接收comments
export const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})

//异步网络请求数据
export const getComments = () => {
    return dispatch => {
        //模拟发送ajax请求获取数据
        setTimeout(() => {
            const comments = [
                {
                    username: "Tom",
                    content: "ReactJS好难啊!",
                    id: Date.now()
                },
                {
                    username: "JACK",
                    content: "ReactJS还不错!",
                    id: Date.now() + 1
                }
            ]

            //分发一个同步的action
            dispatch(receiveComments(comments))
        }, 1000)
    }
}