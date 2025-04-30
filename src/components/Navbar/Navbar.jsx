// imports
import { useNavigate, Link } from "react-router";

// APIs
import * as usersAPI from "../../utilities/user-api";

export default function Navbar({ user, setUser }) {
    const navigate = useNavigate();

    // will refresh state and set us back to home without a user
    function handleLogout() {
        usersAPI.logout()
        setUser(null);
        navigate("/")
    }

    if (user) {
        return (
            <>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Home</Link></li>
                <li><Link to="/experience/new">Add Experience</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/about">About</Link></li>
                <form id="logout-form" onSubmit={handleLogout}>
                    <button type="submit">Log out</button>
                </form>
            </>
        )
    }

    if (!user)
        return (
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/about">About</Link></li>
            </>
        )

}