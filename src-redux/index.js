import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';
import store from './redux/store'

//初始化绘制
ReactDOM.render(<App store={store}/>, document.getElementById('root'));

//订阅监听之后重绘
store.subscribe(function () {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));

})