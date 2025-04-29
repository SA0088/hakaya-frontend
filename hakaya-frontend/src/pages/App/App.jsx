import "./App.css"
import { Route, Routes, Link } from 'react-router';
// import headerLogo from "../../assets/images/header-logo.svg";
import HomePage from '../HomePage/HomePage.jsx';
import AboutPage from '../AboutPage/AboutPage.jsx';
import ExpDetailPage from '../expDetailPage/expDetailPage.jsx';

import HakayaLogo from "../../assets/images/S.png"
export default function App() {

return (<>
    <header>
      <div className="header-logo-container">
        <a href="/">
          <img src={HakayaLogo} alt="The Hakaya Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li><Link to="/experience">Home</Link></li> 
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/categories" element={<AboutPage />} />
        <Route path="/experiences/:id" element={<ExpDetailPage />} />
      </Routes>
    </main>
</>);
}