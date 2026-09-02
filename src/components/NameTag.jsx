import { useState } from 'react';
import './NameTag.css';
import cardRotateMulti from '../assets/CardRotateMulti.gif';
// import cardCosplayRotate from '../assets/0060.png';

function NameTag() {
  const [count, setCount] = useState(0)

  return (
    <div class="name">
      <div class="row">
        Gabriel Gaddi
      </div>
      <img src={cardRotateMulti}  width="300"/>
    </div>
  )
}

export default NameTag