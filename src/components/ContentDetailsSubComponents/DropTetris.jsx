import { useState } from 'react';
import './DropTetris.css';

function DropTetris() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
        Drop Tetris
      </div>
    </div>
  )
}

export default DropTetris