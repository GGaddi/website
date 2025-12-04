import { useState } from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <div class="container-fluid">
      <div class="row align-items-start">
        <div class="col-md-3">
          <TableOfContents />
        </div>
        <div class="col-md-2">
          space
        </div>
        <div class="col-md-7">
          section details
        </div>
      </div>
    </div>
  )
}

export default App
