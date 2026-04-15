import User from "./User";
import UserClass from  "./UserClass";

const About = () => {
    return  <div className="about-main">
        <h3 className="text-center">About US</h3>
        <User name={'Swikriti Jaiswal (using function component)'} role={'Senior Software Developer'} location={'Mumbai'} />
        <UserClass />
    </div>
}

export default About