import React, {Component} from 'react'
//取出模块中的所有对象
import * as action from '../redux/action'

export default class App extends Component {

    componentDidMount() {
        // //高德地图查询用户所在城市
        // // eslint-disable-next-line no-undef
        // var citysearch = new AMap.CitySearch();
        // //自动获取用户IP，返回当前城市
        // citysearch.getLocalCity(function (status, result) {
        //     if (status === 'complete' && result.info === 'OK') {
        //         console.log(result)
        //         if (result && result.city && result.bounds) {
        //
        //             console.log('当前城市为：' + result.city)
        //         }
        //     } else {
        //         console.log(result)
        //     }
        // })
    }


    increment = () => {

        //1、获取option的值
        const number = this.select.value * 1
        //2、调用store的方法更新状态
        this.props.store.dispatch(
            action.increment(number)
        )

    }

    reduce = () => {
        //1、获取option的值
        const number = this.select.value * 1
        //2、调用store的方法更新状态
        this.props.store.dispatch(
            action.decrement(number)
        )
    }


    incrementIfOdd = () => {
        const number = this.select.value * 1
        let count = this.props.store.getState()
        if (count % 2 == 0) {
            this.props.store.dispatch(
                action.increment(number)
            )
        }
    }

    incrementAsync = () => {
        //获取option的值
        const number = this.select.value * 1
        let count = this.props.store.getState()
        count = count + number
        setTimeout(() => {
            this.props.store.dispatch(
                action.increment(number)
            )
        }, 1000)

    }

    render() {

        const count = this.props.store.getState()

        return (
            <div>
                <h1>click {count} times</h1>
                <div>
                    <select ref={select => this.select = select}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;&nbsp;
                    <button onClick={this.reduce}>-</button>
                    &nbsp;&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    &nbsp;&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}