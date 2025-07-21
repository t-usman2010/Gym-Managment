// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = ({ onLoginClick }) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">🏋️ Islamabad Gym</div>
        <nav>
          <a href="#plans">Plans</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <button onClick={onLoginClick} >Login</button>
        </nav>
      </header>

      <section className="hero">
        <h1>Transform Your Body, Transform Your Life</h1>
        <p>Join the most professional gym in Islamabad with expert trainers, latest equipment, and a welcoming community.</p>
        <button onClick={onLoginClick}>Get Started</button>
      </section>

      <section className="features" id="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Trainers</h3>
            <p>Certified professionals to help you reach your fitness goals faster.</p>
          </div>
          <div className="feature-card">
            <h3>Modern Equipment</h3>
            <p>Access to state-of-the-art fitness machines and tools.</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Timings</h3>
            <p>Open from 6am to 11pm daily to suit your schedule.</p>
          </div>
        </div>
      </section>

      <section className="plans" id="plans">
        <h2>Membership Plans</h2>
        <div className="plans-grid">
          <div className="plan-card">
            <h3>Basic</h3>
            <p>PKR 2000 / month</p>
            <ul>
              <li>Gym Access</li>
              <li>Locker Facility</li>
            </ul>
          </div>
          <div className="plan-card recommended">
            <h3>Standard</h3>
            <p>PKR 3500 / month</p>
            <ul>
              <li>Everything in Basic</li>
              <li>Group Classes</li>
              <li>1 Personal Training / week</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Premium</h3>
            <p>PKR 6000 / month</p>
            <ul>
              <li>Unlimited Personal Training</li>
              <li>Diet Consultation</li>
              <li>Free Merchandise</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@islamabadgym.pk</p>
        <p>Phone: 0333-1234567</p>
        <p>Location: G-6/3, Islamabad</p>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Islamabad Gym Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
