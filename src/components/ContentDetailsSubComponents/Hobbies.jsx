import { useState } from 'react';
import './Hobbies.css';

function Hobbies() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
            <p>Hobbies</p>
          </div>
      </div>
    </div>
  )
}

export default Hobbies