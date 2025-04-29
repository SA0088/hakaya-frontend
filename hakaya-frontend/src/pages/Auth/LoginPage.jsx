// import { useState } from "react";
// import { login } from "../../utilities/auth-api";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData);
//       alert("Logged in successfully!");
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input name="email" placeholder="Email" onChange={handleChange} required />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router";

// IMAGES
import catCollectorCat from "../../assets/images/splash.svg";
import logoType from "../../assets/images/logotype.svg";

// APIs
import * as usersAPI from "../../utilities/user-api";


export default function HomePage({ user, setUser }) {
  const initialState = { username: "", password: "" }
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  async function handleLogin(evt) {
    try {
      evt.preventDefault();
      const loggedInUser = await usersAPI.login(formData);
      setUser(loggedInUser);
      navigate("/cats");
    } catch (err) {
      setUser(null);
    }
}

  return (<>
    <section className="logo-container">
      <div className="home-cat-container">
        <img src={catCollectorCat} alt="The Cat Collector Cat" />
      </div>
      <img src={logoType} alt="Text reads: Cat Collector" />
    </section>
    {!user &&
      <section>
        <form onSubmit={handleLogin} className="form-container login">
          <h1>Login</h1>
          <p>
            <label htmlFor="id_username">Username:</label>
            <input value={formData.username} type="text" name="username" maxLength="150" required id="id_username" onChange={handleChange}/>
          </p>
          <p>
            <label htmlFor="id_password">Password:</label>
            <input value={formData.password} type="password" name="password" required id="id_password" onChange={handleChange} />
          </p>
          <button type="submit" className="btn submit">Login</button>
        </form>
      </section>
    }
  </>)
}