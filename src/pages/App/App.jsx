// import React, { useState } from "react";
// import { Route, Routes, Link, useLocation, Navigate } from 'react-router';
// import "./App.css";
// import HomePage from '../HomePage/HomePage.jsx';
// import AboutPage from '../AboutPage/AboutPage.jsx';
// import ExpDetailPage from '../expDetailPage/expDetailPage.jsx';
// import UserProfile from "../UserProfile/UserProfile.jsx";
// // import SignupPage from "../SignupPage/signupPage.jsx";
// import CategoriesPage from "../CategoryPage/CategoryPage";
// import LoginPage from "../LoginPage/LoginPage.jsx"
// import Navbar from "../../components/Navbar/Navbar.jsx"; // تأكد من مكان الملف إذا هو ملف مستقل
// import Footer from '../../components/Footer/Footer.jsx'; // Import the Footer component

// import HakayaLogo from "../../assets/images/S.png";
// import { getUser } from "../../utilities/user-api.js"; // تأكد من وجود الدالة
// import ExpIndexPage from "../ExpIndexPage/ExpIndexPage.jsx";
// import ExpFormPage from "../ExpFormPage/ExpFormPage";

// export default function App() {
//   const [user, setUser] = useState(getUser());
//   const location = useLocation();
//   const routes = ["about", "experience", "home", "categories"];
//   const mainCSS = routes.filter(r => location.pathname.includes(r)).join(" ");

//   return (
//     <>
//       <header>
//         <div className={`${mainCSS} header-logo-container`}>
//           <Link to="/">
//             <img src={HakayaLogo} alt="The Hakaya Logo" />
//           </Link>
//         </div>
//         <nav className="navbar">
//           <ul>
//             <Navbar user={user} setUser={setUser} />
//           </ul>
//         </nav>
//       </header>

//       <main className={mainCSS}>
//         {/* {user ? ( */}
//           <Routes>
//             <Footer/>
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/experiences" element={<ExpIndexPage />} />
//             <Route path="/categories" element={<CategoriesPage />} />
//             <Route path="/experiences/:id" element={<ExpDetailPage />} />
//             <Route path="/experiences/new" element={<ExpFormPage />} />
//             <Route path="/profile" element={<UserProfile />} />
//             <Route path="*" element={<Navigate to="/home" />} />
//           </Routes>
//           <Footer />
//         {/* ) : (
//           <Routes>
//             <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} />
//             // <Route path="*" element={<Navigate to="/home" />} />
//           </Routes>
//         )} */}

//       </main>
//     </>
//   );
// }

import React, { useState } from "react";
import { Route, Routes, Link, useLocation, Navigate } from "react-router";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage.jsx";
import SignupPage from "../SignupPage/signupPage.jsx";
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

export default function App() {
  const [user, setUser] = useState(getUser());
  const location = useLocation();
  const routes = ["about", "experiences", "home", "categories"];
  const mainCSS = routes.filter((r) => location.pathname.includes(r)).join(" ");

  return (
    <div className="app-container">
      <header>
        <div className={`${mainCSS} header-logo-container`}>
          <Link to="/">
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
          <Route path="/experiences/:id" element={<ExpDetailPage />} />
          <Route path="/experiences/new" element={<ExpFormPage />} />
          <Route path="/experiences/edit/:id"           element={<ExpFormPage editCat={true}   />}/>
          <Route path="/experiences/confirm_delete/:id" element={<ExpFormPage deleteCat={true} />}/>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
          <Route path="/reset-password" element={<ForgotPass />} />
          <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

