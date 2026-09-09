import { useEffect, useState } from 'react';
import Resume from '../../assets/Gabriel Gaddi Software Engineer Resume.pdf';
import './ContactInformation.css';

function Credits({fadeInClass}) {
  const [count, setCount] = useState(0)
  return (
    <div
      className={fadeInClass}
    >
      <div class="row">
          <div class="col-lg-12 text-left">
            <h1>Credits</h1>
            <h2>Music</h2>
            <p>Chopin's Waltz in A min, B.150 performed by Aya Higuchi</p>
            <a href="https://musopen.org/music/4406-waltz-in-a-minor-b-150/#recordings">Link to Musopen</a>
            <h2>Menu Sound Effects</h2>
            <p>RPG Essentials SFX Free (Hover and Select Menu Sound) by Leohpaz</p>
            <a href="https://leohpaz.itch.io/rpg-essentials-sfx-free">Leohpaz's RPG Essentials SFX</a>
            <h2>Fonts</h2>
            <p>Comic Hearts by Sam Kolins</p>
            <a href="https://drive.google.com/file/d/1rTzRzO63EXKpI4--N1dcgigJNSnwsvGO/view">Google Drive Link</a>
            <p>KHMenu and KHGummi by Televo</p>
            <a href="https://github.com/Televo/kingdom-hearts-recollection/tree/main/Fonts">Github link to fonts</a>
          </div>
      </div>
    </div>
  )
}

export default Credits