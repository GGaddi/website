import { useState } from 'react';
import profilePic from '../../assets/profilepic.jpg'
import './SelfSummary.css';

function SelfSummary() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
              <h1>Self Summary</h1>
              <img src={profilePic} alt="" height="384" width="216" />
              <p>I am a passionate software developer with a Bachelor's Degree in Computer Science from the University of California, San Diego. I've collaborated with different teammates to develop extravagant applications and websites, working on both front-end and back-end development.</p>
              {/* <br /> */}
              <p>As a software developer, I want to make programs exciting and fun to use. My goal is to develop software that is beneficial, but also engaging and exciting.</p>
          </div>
      </div>
    </div>
  )
}

export default SelfSummary