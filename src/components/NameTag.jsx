import { useState } from 'react';
import './NameTag.css';

function NameTag() {
  const [count, setCount] = useState(0)

  return (
    <div class="name">
      <div class="row">
        Gabriel Gaddi
      </div>
    </div>
  )
}

export default NameTag