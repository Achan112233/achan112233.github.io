import React from 'react';
import './home.css';
import logo from "../../assets/LOGOv2.png"
import Card from "../../Card";
function Home() {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <h1>Anthony Chan</h1>
      <img className="card-image"src={logo} alt="profile picture"></img>
      <h2>Software Developer</h2>
      <p>Crafting elegant solutions to complex problems</p>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <Card/>
      <p>I'm a passionate software developer with 5 years of experience in creating web applications. I specialize in React, Node.js, and Python. My goal is to build efficient, scalable, and user-friendly applications that make a difference.</p>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <a href="mailto:johndoe@example.com" className="contact-button">Email Me</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>&copy; 2024 John Doe. All rights reserved.</p>
    </footer>
  );
}

export default Home;