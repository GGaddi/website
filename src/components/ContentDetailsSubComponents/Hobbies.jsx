import { useState } from 'react';
import './Hobbies.css';

function Hobbies() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
            <h1>Hobbies</h1>
            <p>For anyone first meeting me, the first thing they will easily learn is that I love video games and anime. Both things are pretty much my whole life.
              I like to stream on twitch when I can when playing and even do a few speedruns when I have the time. I also cosplay both from video games and anime such as cosplaying Sora from Kingdom Hearts
              and Tanjiro from Demon Slayer. If you would like to see my socials for my video game streaming or recordings, feel free to check my links out!
            </p>
            <p><a href="https://twitch.tv/brixgale" target="_blank">Twitch</a></p>
            <p><a href="https://youtube.com/@brixgale" target="_blank">Youtube</a></p>
          </div>
      </div>
    </div>
  )
}

export default Hobbies