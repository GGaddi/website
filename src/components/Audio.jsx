import { useState, useRef } from 'react';
import './Audio.css';
import Waltz from "../assets/Aya+Higuchi+-+Waltz+in+A+minor,+B.+150.mp3";
import MusicNote from "../assets/musicNote.png";
import MusicNoteMute  from "../assets/musicNoteMute.png";

function Audio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div class="row justify-content-end">
        <audio ref={audioRef} src={Waltz} loop />
        <button class="btn toggle-btn" onClick={togglePlay}>
          {isPlaying ? <img src={MusicNote} width="50" height="50" /> : <img src={MusicNoteMute} width="50" height="50" />}
        </button>
    </div>
  )
}

export default Audio