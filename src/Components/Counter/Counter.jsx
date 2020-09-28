import React, {Component} from "react";
import CounterDisplay from "./CounterDisplay/CounterDisplay";

/*
The basic lifecycle of a React component is:
    -creation
    -mounted
    -unmounted
    -destroyed

*/

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: (this.state.count++)
        })

    }

    decrement = () => {
        this.setState({
            count: (this.state.count--)
        })

    }

    render() {
        return (
            <div>
                <CounterDisplay />
            </div>
        )
    }
}