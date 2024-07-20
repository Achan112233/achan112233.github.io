import React from 'react';
import './home.css';
import logo from "../../assets/LOGOv2.png"
import Card from "../../Card";
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
function Home() {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Experience />
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
      <p>Crafting Elegant Solutions to Complex Problems!</p>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <Card/>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <a className="contact-button" href="mailto:anthonycc1122@gmail.com">Email Me</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Achan112233" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/antchan12" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>&copy; 2024 Anthony Chan. All rights reserved.</p>
    </footer>
  );
}

export default Home;