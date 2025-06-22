
import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation, Navigate } from "react-router";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage.jsx";
import SignupPage from "../SignupPage/SignupPage.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import AboutPage from "../AboutPage/AboutPage.jsx";
import ExpDetailPage from "../expDetailPage/expDetailPage.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import CategoriesPage from "../CategoryPage/CategoryPage.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HakayaLogo from "../../assets/images/S.png";
import { getUser } from "../../utilities/user-api.js";
import ExpIndexPage from "../ExpIndexPage/ExpIndexPage.jsx";
import ExpFormPage from "../ExpFormPage/ExpFormPage.jsx";
import ForgotPass from "../ForgotPass/ForgotPass.jsx";
import Expcategory from "../expCategory/expCategory.jsx";
import EditExperiencePage from "../EditExpPage/EditExpPage.jsx";
import * as userApi from "../../utilities/user-api"

export default function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const routes = ["about", "experiences", "home", "categories"];
  const mainCSS = routes.filter((r) => location.pathname.includes(r)).join(" ");

  const getUser = async () =>{
    const userprofile = await userApi.getUser()
    setUser(userprofile)
  }

  useEffect(()=>{
    getUser()
  },[])


  return (
    <div className="app-container">
      <header>
        <div className={`${mainCSS} header-logo-container`}>
          <Link to="/home">
            <img src={HakayaLogo} alt="The Hakaya Logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <Navbar user={user} setUser={setUser} />
          </ul>
        </nav>
      </header>
      <main className={mainCSS}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experiences" element={<ExpIndexPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/experiences/:id" element={<ExpDetailPage user={user}/>} />
          <Route path="/category/:id/experiences" element={<Expcategory />} /> 
          <Route path="/experiences/new" element={<ExpFormPage />} />
          <Route path="/experiences/:id/edit"           element={<EditExperiencePage edit={true} user={user}   />}/>
          <Route path="/experiences/confirm_delete/:id" element={<ExpFormPage delete={true} user={user}/>}/>
          <Route path="/profile" element={<UserProfile user={user}/>} />
          <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
          <Route path="/reset-password" element={<ForgotPass />} />
          <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

