// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';


function Home() {
  return (
    <div className="home-page">
      {/* Hero Section with Welcome Message */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to My Portfolio</h1>
            <p className="hero-subtitle">
              Full-Stack Developer & Problem Solver
            </p>
            
            {/* Mission Statement */}
            <div className="mission-statement">
              <h2>My Mission</h2>
              <p>
                To leverage my skills in web development to create impactful digital
                experiences that solve real-world problems and enhance user engagement.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn About Me
              </Link>
              <Link to="/project" className="btn btn-secondary">
                View My Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <div className="container">
          <h2>Explore My Portfolio</h2>
          <div className="links-grid">
            <Link to="/about" className="link-card">
              <h3>About Me</h3>
              <p>Learn about my background and experience</p>
            </Link>
            <Link to="/project" className="link-card">
              <h3>Projects</h3>
              <p>See my latest work and achievements</p>
            </Link>
            <Link to="/education" className="link-card">
              <h3>Education</h3>
              <p>My academic and professional qualifications</p>
            </Link>
            <Link to="/Services" className="link-card">
              <h3>Services</h3>
              <p>What I can offer to your next project</p>
            </Link>
            <Link to="/contact" className="link-card">
              <h3>Contact</h3>
              <p>Get in touch for collaborations or inquiries</p>
            </Link>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
