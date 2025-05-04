import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about">
      <header className="about-hero">
        <div className="hero-overlay">
          <h1>HAKAYA</h1>
          <p>Your gateway to authentic experiences and meaningful stories...</p>
        </div>
      </header>

      <section className="about-section">
        <h2>What is HAKAYA?</h2>
        <p>
          HAKAYA is a community-driven platform where users can share, explore, and connect through real-life experiences. 
          Whether it's an adventure, a personal journey, or a volunteer moment — your story matters.
        </p>
      </section>

      <section className="about-categories">
        <h2>Our Categories</h2>
        <div className="category-cards">
          <div className="card">🌍 Adventure</div>  
          <div className="card">🍳 Cooking</div>
          <div className="card">🎭 Culture</div>
          <div className="card">📚 Learning</div>
          <div className="card">🤝 Volunteering</div>
          <div className="card">✈️ Travel</div>
        </div>
      </section>

      <section className="about-how">
        <h2>How It Works</h2>
        <ol>
          <li>Sign up and create your profile.</li>
          <li>Choose a category and share your experience.</li>
          <li>Engage with others by liking and commenting.</li>
        </ol>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Reach out to us anytime:</p>
        <p>Email: <a href="mailto:contact@hakaya.com">contact@hakaya.com</a></p>
      </section>

      {/* <footer className="about-footer">
        <h2>Follow HAKAYA</h2>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} HAKAYA. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
