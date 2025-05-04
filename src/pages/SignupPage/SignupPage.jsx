import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import * as usersAPI from "../../utilities/user-api.js";
import Logohakayalogo from "../../assets/images/S1.png";
import "./SignupPage.css";
export default function SignupPage({ setUser }) {
  const navigate = useNavigate();
  const [animateLogo, setAnimateLogo] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setAnimateLogo(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLogo(true); // تصغير اللوقو بعد ثانيتين من تحميل الصفحة
    }, 1000);
  
    return () => clearTimeout(timer);
  }, []);

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const disabledSubmitBtn =
    Object.values(errors).every((val) => val === "") &&
    Object.values(formData).every((val) => val !== "");

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    checkErrors(name, value);
  }

  function checkErrors(name, value) {
    const updatedErrors = { ...errors };

    switch (name) {
      case "firstName":
        updatedErrors.firstName = value.trim() === "" ? "First name is required." : "";
        break;
      case "lastName":
        updatedErrors.lastName = value.trim() === "" ? "Last name is required." : "";
        break;
      case "username":
        updatedErrors.username = value.length < 3 ? "Username must be at least 3 characters." : "";
        break;
      case "email":
        updatedErrors.email = !value.includes("@") ? "Please enter a valid email." : "";
        break;
      case "password":
        updatedErrors.password = value.length < 3 ? "Password must be at least 3 characters." : "";
        updatedErrors.confirmPassword =
          formData.confirmPassword && value !== formData.confirmPassword
            ? "Passwords do not match."
            : "";
        break;
      case "confirmPassword":
        updatedErrors.confirmPassword =
          value !== formData.password ? "Passwords do not match." : "";
        break;
      default:
        break;
    }

    setErrors(updatedErrors);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newUser = await usersAPI.signup(formData);
      setUser(newUser);
      setFormData(initialState);
      navigate("/experiences");
    } catch (err) {
      console.log(err);
      setUser(null);
    }
  }

  return (
    <>
      <div className="signup-page">
        {/* <div className="logo-wrapper">
            <div className={`logo-overlay ${animateLogo ? "shrink" : ""}`}>
                <img src={Logohakayalogo} alt="Hakaya Logo" className="logo-img" />
            </div>
        </div> */}
        <div className={`logo-wrapper ${animateLogo ? "shrink" : ""}`}>
            <img src={Logohakayalogo} alt="Hakaya Logo" className="logo-img" />
        </div>

        <form onSubmit={handleSubmit} className="form-container signup">
            <div className="page-header">
                <h1>Sign Up</h1>
            </div>
            <table>
            <tbody>
                <tr>
                <th><label htmlFor="id_first_name">First Name:</label></th>
                <td>
                    <input
                    type="text"
                    id="id_first_name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </td>
                </tr>
                <tr>
                <th><label htmlFor="id_last_name">Last Name:</label></th>
                <td>
                    <input
                    type="text"
                    id="id_last_name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </td>
                </tr>
                <tr>
                <th><label htmlFor="id_username">Username:</label></th>
                <td>
                    <input
                    type="text"
                    id="id_username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    minLength="3"
                    maxLength="150"
                    required
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </td>
                </tr>
                <tr>
                <th><label htmlFor="id_email">Email:</label></th>
                <td>
                    <input
                    type="email"
                    id="id_email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </td>
                </tr>
                <tr>
                <th><label htmlFor="id_password1">Password:</label></th>
                <td>
                    <input
                    type="password"
                    id="id_password1"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength="3"
                    required
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </td>
                </tr>
                <tr>
                <th><label htmlFor="id_password2">Confirm Password:</label></th>
                <td>
                    <input
                    type="password"
                    id="id_password2"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    />
                    {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                    )}
                </td>
                </tr>
            </tbody>
            </table>

            <button type="submit" disabled={!disabledSubmitBtn} className="btn submit">
            Submit!
            </button>
            <p className="login-link">
                Already have an account?{" "}
                <Link to="/login">Login here</Link> {/* رابط إلى صفحة الدخول */}
            </p>
        </form>
      </div>
    </>
  );
}
