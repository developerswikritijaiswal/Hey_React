import React from 'react';
import Test from './Test';

class UserChild extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+'Child Constructor');
    }

    componentDidMount(){
        console.log(this.props.name+'Child Component Did Mount');
    }

    render(){
        console.log(this.props.name+'Child Render');
        return (
            <div>
                <div>{this.props.name}</div>
                <Test />
            </div>
        )
    }
}

export default UserChild;