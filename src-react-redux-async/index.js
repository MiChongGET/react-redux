import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './containers/app';
import store from './redux/store'

function init() {
    //初始化绘制
    ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
}

//初始化绘制页面
init()
