import React from "react";
import UserChild from "./UserChild";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        // creating state variable
        this.state = {
            name: 'dummy name',
            role: 'frontend developer',
            location: 'India',
            bio: 'Hey!!',
            // count: 0,
            // count2:2
        }
        console.log('parent Constructor');
    }

    async componentDidMount(){
        console.log('parent Component Did Mount');
        const response = await fetch('https://api.github.com/users/developerswikritijaiswal');
        const json = await response.json();
        console.log(json);

        this.setState(
            json
        )

        this.timer = setInterval(()=>{
            console.log('count');
        },1000)
    }

    componentDidUpdate(a,b){
        if(b.name !== this.state.name){
            console.log('parent Component Did Update');
        }
    }

    componentWillUnmount(){ // use to detroy the component
        clearInterval(this.timer);
    }

    render(){
        console.log('parent Render');
        const {name, role, location, bio} = this.state;
        
        return <div className="user-card" >
            {/* <h2>Count: {this.state.count}</h2>
            <h2>Count2: {this.state.count2}</h2> */}
            {/* <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1,
                    count2: this.state.count2 + 2,
                })
            }}>Count Increse</button> */}
            <button onClick={(()=>{
                this.setState ({
                    name: 'dummy name1',
                    role: 'frontend developer1',
                    location: 'India1',
                    bio: 'Hello!!',
                })
            })}>btn 1</button>
            <button onClick={()=>{console.log('button2')}}>btn 2</button>
            <h3>Name : {name}</h3>
            <h3>Role: {role}</h3>
            <h3>Location: {location}</h3>
            <p>Bio: {bio}</p>
            {/* <UserChild name={'First'} />
            <UserChild name={'Second'} />
            <UserChild name={'third'} /> */}
        </div>
    }
}

export default UserClass;