//包装一下App
import {connect} from "react-redux";
import {decrement, increment,incrementAsync} from "../redux/action";

import Counter from '../components/counter'

export default connect(
    state=>({count:state}),
    {increment,decrement,incrementAsync}
)(Counter)