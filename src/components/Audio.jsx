import { useState, useEffect, useRef } from 'react';
import './Audio.css';
import Waltz from "../assets/Aya+Higuchi+-+Waltz+in+A+minor,+B.+150.mp3";
import MusicNote from "../assets/musicNote.png";
import MusicNoteMute  from "../assets/musicNoteMute.png";

function Audio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <div class="row justify-content-end">
        <audio ref={audioRef} src={Waltz} loop />
        <button class="btn toggle-btn" onClick={togglePlay}>
          {isPlaying ? <img src={MusicNote} width="50" height="50" /> : <img src={MusicNoteMute} width="50" height="50" />}
        </button>
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
    </div>
  )
}

export default Audio