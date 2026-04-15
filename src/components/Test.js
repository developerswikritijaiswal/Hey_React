import { Component } from "react"

class Test extends Component{
    constructor(props){
        super(props);
        console.log('Test Constructor');
    }

    componentDidMount(){
        console.log('Test Component Did Mount');
    }

    render(){
        console.log('Test Render');
        return (
            <div>
                <p>This is the Test component</p>
            </div>
        )
    }
}

export default Test;