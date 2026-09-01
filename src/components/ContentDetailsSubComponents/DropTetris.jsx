import { useState } from 'react';
import './DropTetris.css';

function DropTetris() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
              <h1>Drop Tetris</h1>
          </div>
      </div>
    </div>
  )
}

export default DropTetris