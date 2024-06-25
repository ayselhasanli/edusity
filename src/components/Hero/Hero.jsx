import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn">
          Explore more <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Hero
