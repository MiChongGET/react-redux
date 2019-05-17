import React, {Component} from 'react'
//包装一下App
import {connect} from "react-redux";
import {decrement, increment} from "../redux/action";

import Counter from '../components/counter'

export default connect(
    state=>({count:state}),
    {increment,decrement}
)(Counter)