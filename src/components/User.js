import {useState, useEffect} from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(2);
    const {name, role, location} = props;
    const [bio, setBio] = useState('Hey!!');
    const [data, setData] = useState({});

    useEffect(() =>{
        fetchAboutData();

        const timer = setInterval(() => {
            console.log('function count');
        }, 1000)

        return(() => { // useEffect return function is used to clear/destroy the component
            clearInterval(timer)
        })
    },[]);

    const fetchAboutData = async() => {
        const response = await fetch('https://api.github.com/users/developerswikritijaiswal');
        const json = await response.json();
        setData(json);
    }

    return <div className="user-card">
            {/* <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <button onClick={(()=>{
                setCount(count + 1);
            })}>Count Increase</button> */}
            <button onClick={()=>{
                setBio(data.bio);
            }}>Show Bio</button>
            <h3>Name : {name}</h3>
            <h3>Role: {role}</h3>
            <h3>Location: {location}</h3>
            <p>Bio: {bio}</p>
        </div>
}

export default User;