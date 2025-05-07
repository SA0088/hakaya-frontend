import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import * as usersAPI from "../../utilities/user-api.js";
import "./SignupPage.css";

export default function SignupPage({ setUser }) {
  const navigate = useNavigate();

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({ ...initialState });
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLogo(true); // Animate logo after 1 second
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const isFormValid =
    Object.values(errors).every((val) => val === "") &&
    Object.values(formData).every((val) => val !== "");

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  }

  function validateField(name, value) {
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
      navigate("/home");
    } catch (err) {
      console.error(err);
      setUser(null);
    }
  }

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="form-container signup">
        <div className="page-header">
          <h1>Sign Up</h1>
        </div>

        <table>
          <tbody>
            <InputRow
              label="First Name"
              id="id_first_name"
              name="firstName"
              type="text"
              value={formData.firstName}
              error={errors.firstName}
              onChange={handleChange}
              required
            />
            <InputRow
              label="Last Name"
              id="id_last_name"
              name="lastName"
              type="text"
              value={formData.lastName}
              error={errors.lastName}
              onChange={handleChange}
              required
            />
            <InputRow
              label="Username"
              id="id_username"
              name="username"
              type="text"
              value={formData.username}
              error={errors.username}
              onChange={handleChange}
              required
              minLength={3}
              maxLength={150}
            />
            <InputRow
              label="Email"
              id="id_email"
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              required
            />
            <InputRow
              label="Password"
              id="id_password1"
              name="password"
              type="password"
              value={formData.password}
              error={errors.password}
              onChange={handleChange}
              required
              minLength={3}
            />
            <InputRow
              label="Confirm Password"
              id="id_password2"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              error={errors.confirmPassword}
              onChange={handleChange}
              required
            />
          </tbody>
        </table>

        <button type="submit" disabled={!isFormValid} className="btn submit">
          Submit!
        </button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

// Reusable input row component
function InputRow({ label, id, name, type, value, error, onChange, ...rest }) {
  return (
    <tr>
      <th>
        <label htmlFor={id}>{label}:</label>
      </th>
      <td>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        />
        {error && <p className="error">{error}</p>}
      </td>
    </tr>
  );
}
