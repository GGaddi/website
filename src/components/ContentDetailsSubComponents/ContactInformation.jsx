import { useState } from 'react';
import Resume from '../../assets/Gabriel Gaddi Resume.pdf';
import './ContactInformation.css';

function ContactInformation() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
            <h1>Contact Information</h1>
            <p>
              Feel free to contact me at my email or phone number.
            </p>
              <li><i class="fa fa-phone fa-fw"></i> (559) 824-0194</li>
              <li><i class="fa fa-envelope-o fa-fw"></i> <a href="mailto:gabriel.gaddi93@gmail.com">gabriel.gaddi93@gmail.com</a></li>
            <p>
              <a href={Resume} target ="_blank"> Click here to view my resume </a>
              <ul class="list-inline">
                  <li>
                      <a href="https://www.linkedin.com/in/gabrielgaddi"><i class="fa fa-linkedin fa-fw fa-3x"></i></a>
                  </li>
                  <li>
                      <a href="https://www.twitch.tv/brixgale"><i class="fa fa-twitch fa-fw fa-3x"></i></a>
                  </li>
              </ul>
            </p>
          </div>
      </div>
    </div>
  )
}

export default ContactInformation