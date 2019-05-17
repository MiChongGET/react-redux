import {createStore,applyMiddleware} from "redux";
import {counter} from "../redux/reducers";
import thunk from 'redux-thunk'

//生成一个store对象,应用上异步的中间件
const store = createStore(counter,applyMiddleware(thunk))
console.log(store)

export default store