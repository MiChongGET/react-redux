import React, {Component} from 'react'

export default class App extends Component {

    state = {
        count: 2
    }

    increment = () => {

        //获取option的值
        const number = this.select.value * 1
        let count = this.state.count
        count = count + number
        this.setState({count})
    }

    reduce = () => {
        const number = this.select.value * 1
        let count = this.state.count
        count = count - number
        this.setState({count})
    }


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

    incrementIfOdd = () => {
        const number = this.select.value * 1
        let count = this.state.count
        if (count % 2 == 0) {
            this.setState({count: count + number})
        }
    }

    incrementAsync = () => {
        //获取option的值
        const number = this.select.value * 1
        let count = this.state.count
        count = count + number
        setTimeout(() => {
            this.setState({count})
        }, 1000)

    }

    render() {
        return (
            <div>
                <h1>click {this.state.count} times</h1>
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