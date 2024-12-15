import React from "react";
import heroSvg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
          esse illum asperiores ab sapiente, ipsum similique cum incidunt animi
          nihil est quis? Expedita pariatur laudantium alias et repellendus
          nobis ipsam?
        </p>
        </div>
        <div className="img-container">
            <img src={heroSvg} alt="Hero Svg" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
