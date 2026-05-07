import UserContext from "../utils/UserContext";
import {useContext} from "react";

const Contact = () => {
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="contact-main text-center mt-20">
            <h1>Connect with Us!!</h1>
            <h2>Logged In User : {loggedInUser}</h2>
        </div>
    )
}

export default Contact;