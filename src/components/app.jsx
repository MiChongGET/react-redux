import React, {Component} from 'react'

export default class App extends Component {

    state = {
        count: 2
    }

    increment = () => {

        //获取option的值
        const number = this.select.value*1
        let count = this.state.count
        count = count+number
        this.setState({count})
    }

    reduce = () => {
        const number = this.select.value*1
        let count = this.state.count
        count = count-number
        this.setState({count})
    }

    render() {
        return (
            <div>
                <h1>click {this.state.count} times</h1>
                <div>
                    <select ref={select=>this.select=select}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;&nbsp;
                    <button onClick={this.reduce}>-</button>
                    &nbsp;&nbsp;
                    <button>increment if odd</button>
                    &nbsp;&nbsp;
                    <button>increment async</button>
                </div>
            </div>
        )
    }
}