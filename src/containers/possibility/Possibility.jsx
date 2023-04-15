import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Myself Akshay Kumar Sharma, i'm from Kanpur. I have done my BCA from Dr. Virendra Swarup Institute of Computer Studies, and I have done my MCA 
          from Central University of Haryana. Currently i'm working in 18th Digitech Technologies Pvt Ltd. here i work as a Web Developer.
           I have good knowledge of Reacjs, React-Redux, React-pwa, JavaScript and intermdiate knowledge of html, CSS, Core-java, My-sql.</p>
    </div>
  </div>
);

export default Possibility;
