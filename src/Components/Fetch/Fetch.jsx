import React, {Component} from "react";
// import { render } from "react-dom";
import FetchDisplay from "./FetchDisplay/FetchDisplay"

export default class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state ={
            img: ""
        }
    }

componentWillMount() {
    console.log("i am about to say hellow")
}

componentDidMount () {
    console.log('component mount');
    fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(json => this.setState({
        img: json.url
    }))
}
            render() {
                return (
                    <div>
                        <FetchDisplay url={this.state.img}/>
            
                    </div>
                )
            }
}
