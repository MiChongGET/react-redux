import {createStore, applyMiddleware} from "redux";
import {counter} from "../redux/reducers";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

//生成一个store对象,应用上异步的中间件
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))
)
console.log(store)

export default store