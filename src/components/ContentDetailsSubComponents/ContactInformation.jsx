import { useState } from 'react';
import Resume from '../../assets/Gabriel Gaddi Software Engineer Resume.pdf';
import './ContactInformation.css';

function ContactInformation() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
            <h1>Contact and Socials</h1>
            <p>
              Feel free to contact me at my email, phone number, or any other of the social links provided.
            </p>
            <p><a href="tel:+15598240194"><i class="fa-solid fa-phone fa-fw fa-2x"></i>(559) 824-0194</a></p>
            <p><a href="mailto:gabriel.gaddi93@gmail.com"><i class="fa-solid fa-envelope fa-fw fa-2x"></i>gabriel.gaddi93@gmail.com</a></p>
            <p><a href="https://www.linkedin.com/in/gabrielgaddi"><i class="fa-brands fa-square-linkedin fa-fw fa-2x"></i>LinkedIn</a></p>
            <p><a href="https://github.com/GGaddi"><i class="fa-brands fa-github fa-fw fa-2x"></i>Github</a></p>
            <p><a href="https://www.twitch.tv/brixgale"><i class="fa-brands fa-twitch fa-fw fa-2x"></i>Twitch</a></p>
            <p><a href="https://youtube.com/@brixgale" target="_blank"><i class="fa-brands fa-youtube fa-fw fa-2x"></i>Youtube</a></p>
            <p> Feel free to also take a copy of my resume</p>
            <p><a href={Resume} target ="_blank"><i class="fa-solid fa-file fa-fw fa-2x"></i>Click here to view my resume </a></p>
          </div>
      </div>
    </div>
  )
}

export default ContactInformation