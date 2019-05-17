import {createStore} from "redux";
import {counter} from "../redux/reducers";

//生成一个store对象
const store = createStore(counter)
console.log(store)

export default store