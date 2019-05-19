import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {

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

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }

    increment = () => {

        //1、获取option的值
        const number = this.select.value * 1
        //2、直接调用方法
        this.props.increment(number)

    }

    reduce = () => {
        //1、获取option的值
        const number = this.select.value * 1
        //2、直接调用方法
        this.props.decrement(number)
    }


    incrementIfOdd = () => {
        const number = this.select.value * 1
        console.log(number)
    }

    incrementAsync = () => {
        //获取option的值
        const number = this.select.value * 1
        this.props.incrementAsync(number)
    }

    render() {

        const count = this.props.count

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
