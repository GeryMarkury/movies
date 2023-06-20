import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <>
            <h1>Oops...The page is not found!</h1>
            <Link to="/" end>Return to Home page</Link>
        </>
    )
};
