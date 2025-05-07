
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Logohakayalogo from "../../assets/images/S1.png";
import * as usersAPI from "../../utilities/user-api";
import "./LoginPage.css";

export default function HomePage({ user, setUser }) {
  const [formData, setFormData] = useState({ username: "", password: "", rememberMe: false });
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
    const { name, value, type, checked } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // async function handleLogin(evt) {
  //   evt.preventDefault();
  //   try {
  //     const loggedInUser = await usersAPI.login(formData);
  //     localStorage.setItem("token", response.token);

  //     setUser(loggedInUser);
  //     navigate("/home");
  //   } catch (err) {
  //     setUser(null);
  //     alert("Invalid username or password");
  //     // navigate("/login");

  //   }
  // }
  async function handleLogin(evt) {
    evt.preventDefault();
    try {
      const loggedInUser = await usersAPI.login(formData);
      // localStorage.setItem("token", loggedInUser.token); // save the token to localStorage
      setUser(loggedInUser); // set the user state
      navigate("/home"); // redirect to home page
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

      {!user && (
        <section className={`login-section ${showForm ? "show" : ""}`}>
          
          <form onSubmit={handleLogin} className="login-form">
            <h2>Login to Hakaya</h2>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
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

            <button type="submit" className="btn submit">Log In</button>

            <p className="forgot-password">
              <Link to="/reset-password">Forgot your password?</Link>
            </p>

            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </form>
        </section>
      )}
    </>
  );
}




// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router";
// import Logohakayalogo from "../../assets/images/S1.png";
// import * as usersAPI from "../../utilities/user-api";
// import "./LoginPage.css";

// export default function HomePage({ user, setUser }) {
//   const [formData, setFormData] = useState({ username: "", password: "", rememberMe: false });
//   const [animateLogo, setAnimateLogo] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const logoTimer = setTimeout(() => setAnimateLogo(true), 1000);
//     const formTimer = setTimeout(() => setShowForm(true), 2000);
//     return () => {
//       clearTimeout(logoTimer);
//       clearTimeout(formTimer);
//     };
//   }, []);

//   function handleChange(evt) {
//     const { name, value, type, checked } = evt.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     if (errorMessage) setErrorMessage("");
//   }

  // async function handleLogin(evt) {
  //   evt.preventDefault();
  //   try {
  //     const loggedInUser = await usersAPI.login(formData); // هذا يجب أن يرمي خطأ إذا فشل
  //     setUser(loggedInUser);
  //     navigate("/home");
  //   } catch (err) {
  //     setUser(null);
  //     setErrorMessage("Invalid username or password");
  //   }
  // }
//   async function handleLogin(evt) {
//     evt.preventDefault();
//     try {
//       const loggedInUser = await usersAPI.login(formData);
  
//       // إذا كان الـ login يُرجع توكن
//       localStorage.setItem("token", loggedInUser.token);
  
//       setUser(loggedInUser);
//       navigate("/home");
//     } catch (err) {
//       setUser(null);
//       alert("Invalid username or password");
//     }
//   }
  
//   return (
//     <>
//       <div className={`logo-overlay ${animateLogo ? "shrink" : ""}`}>
//         <img src={Logohakayalogo} alt="Hakaya Logo" className="logo-img" />
//       </div>

//       {!user && (
//         <section className={`login-section ${showForm ? "show" : ""}`}>
//           <form onSubmit={handleLogin} className="login-form">
//             <h2>Login to Hakaya</h2>

//             {errorMessage && <p className="error-message">{errorMessage}</p>}

//             <div className="form-group">
//               <label>Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="remember-me">
//               <label htmlFor="rememberMe">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   name="rememberMe"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                 />
//                 Remember me
//               </label>
//             </div>

//             <button type="submit" className="btn submit">Log In</button>

//             <p className="forgot-password">
//               <Link to="/reset-password">Forgot your password?</Link>
//             </p>

//             <p className="signup-link">
//               Don't have an account? <Link to="/signup">Sign up here</Link>
//             </p>
//           </form>
//         </section>
//       )}
//     </>
//   );
// }
