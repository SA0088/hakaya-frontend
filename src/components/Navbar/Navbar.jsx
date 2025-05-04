import { useNavigate, Link } from "react-router";
import * as usersAPI from "../../utilities/user-api";
import "./navstyle.css";
export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout(evt) {
    evt.preventDefault();
    usersAPI.logout();
    setUser(null);
    navigate("/");
  }

  if (user) {
    return (
      <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/experiences">Experience</Link></li>
        <li><Link to="/experiences/new">Add Experience</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <form id="logout-form" onSubmit={handleLogout}>
            <button type="submit">Log out</button>
          </form>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/about">About</Link></li>
      </>
    );
  }
}
