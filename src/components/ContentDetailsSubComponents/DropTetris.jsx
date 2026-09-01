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
              <p><a href="https://drop-custom-tetris.netlify.app/" target="_blank"><i class="fa-solid fa-gamepad fa-fw fa-2x"></i> Click here to open link to game</a></p>
              <p><a href="https://github.com/GGaddi/tetris-claude-ai" target="_blank"><i class="fa-brands fa-github fa-fw fa-2x"></i> Click here to go to github repository</a></p>
              <p>Recreating Tetris via Claude AI using React and NodeJs as the main framework.</p>
              <p>
                This is a project made to gain experience with utilizing Claude AI.
                All code was written and edited by Claude AI with prompts made by me using Sonnet 5 with Medium effort level for most prompts.
                The goal of this project was to get experience with using Claude AI prompts to generate code
                and to get used to the nomenclature needed for efficient prompts.
                Some of the prompts I made along the way involved adding custom skins, music, sound flexibility, announcer, and cleaning up UI.
              </p>
              <p>
                I initialized the project by asking Claude AI to generate a tetris clone with customizable rules usign React and Node as the main framework.
                Due to using the free tier, I did not have access to Claude code, so had Claude generate code in the chat and I would transfer the files
                and changes manually over. I would then manually git add and commit the files once I reviewed the changes. When I felt the project was in a good place,
                I decided to utilize netlify to connect to the repository for hosting and deployment for public access.
              </p>
          </div>
      </div>
    </div>
  )
}

export default DropTetris