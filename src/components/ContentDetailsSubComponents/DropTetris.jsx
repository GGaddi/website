import { useState } from 'react';
import projectScreenshot from '../../assets/projectScreenshots/DropTetris/DropScreenshotFourLine.png'
import './DropTetris.css';

function DropTetris() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
              <h1>Drop: Tetris Clone</h1>
              <img class="screenshot" src={projectScreenshot} alt="" height="auto" width="auto" />
              <p></p>
          </div>
      </div>
    </div>
  )
}

export default DropTetris