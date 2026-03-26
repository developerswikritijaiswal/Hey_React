import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error-main text-center">
            <h1>Opps!!</h1>
            <h2>Something went wroung!!</h2>
            <p>{err.status}: {err.statusText}</p>
            <div className="login-btn"><Link to="/">Home</Link></div>
        </div>
    )
}

export default Error;