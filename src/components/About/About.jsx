import React from 'react';
import "../../css/About.css";
import AboutImg from "../../images/about.png";
import CV from "../../images/sameh-dhamer.pdf";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">  About Me  </h2>
            <span className="section__subtitle"> My Introduction</span>
           <div className="about__container container grid">
             <img src={AboutImg} alt="" className="about__img" />
             <div className="about__data"></div>
           </div>
        </section>
    )
}

export default About