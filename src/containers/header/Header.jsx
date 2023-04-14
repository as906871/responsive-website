import React, { useState } from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  const [email, setEmail] = useState('');
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(email);
    setEmail('');
  };
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing by taking help of Akshay</h1>
        <p> Myself Akshay Kumar Sharma, i'm from Kanpur. I have done my BCA from Dr. Virendra Swarup Institute of Computer Studies, and I have done my MCA 
          from Central University of Haryana. Currently i'm working in 18th Digitech Technologies Pvt Ltd. here i work as a Web Developer.   </p>

        <div className="gpt3__header-content__input">
          <form onSubmit={handleSubmit}>
            <input id="email" type="text" value={email} onChange={handleEmail} placeholder="Enter email address" /><br/><br/>
            <button type="submit"> Get Started </button>
          </form>

        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
