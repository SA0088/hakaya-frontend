
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Logohakayalogo from "../../assets/images/S1.png";
import * as usersAPI from "../../utilities/user-api";
import "./LoginPage.css"

export default function HomePage({ user, setUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [animateLogo, setAnimateLogo] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logoTimer = setTimeout(() => setAnimateLogo(true), 1000);
    const formTimer = setTimeout(() => setShowForm(true), 2000);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(formTimer);
    };
  }, []);

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  async function handleLogin(evt) {
    evt.preventDefault();
    try {
      const loggedInUser = await usersAPI.login(formData);
      setUser(loggedInUser);
      navigate("/home");
    } catch (err) {
      setUser(null);
      alert("Invalid username or password");
    }
  }

  return (
    <>
      <div className={`logo-overlay ${animateLogo ? "shrink" : ""}`}>
        <img src={Logohakayalogo} alt="Hakaya Logo" className="logo-img" />
      </div>

      {!user && showForm && (
        <section className="login-section">
          <form onSubmit={handleLogin} className="login-form">
            <h2>Login to Hakaya</h2>
            <div className="form-group">
              <label>Username</label>
              <input
                value={formData.username}
                type="text"
                name="username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                value={formData.password}
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="remember-me">
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                Remember me
              </label>
            </div>

            <button type="submit" className="btn submit">
              Log In
            </button>

            <p className="forgot-password">
              <Link to="/reset-password">Forgot your password?</Link>
            </p>

            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
            {/* <button type="submit" className="btn-primary">Login</button>
            <Link to="/signup" className="btn-secondary">Signup</Link> */}
          </form>
        </section>
      )}
    </>
  );
}
