import { useState } from 'react';
import './ContactInformation.css';

function ContactInformation() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
            <p>Contact Information</p>
          </div>
      </div>
    </div>
  )
}

export default ContactInformation