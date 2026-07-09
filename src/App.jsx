import { useState } from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents.jsx';
import ContentDetails from './components/ContentDetails.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <div class="container-fluid">
      <div class="row fullRow align-items-start">
        <div class="col-md-3">
          <TableOfContents
            selectContent={setSelectedContent}
          />
        </div>
        <div class="col-md-1">
        {/* empty space between content and menu. Need to remove under mobile */}
        </div>
        <div class="col-md-8" id="content-container">
          <ContentDetails
            selectedContent={selectedContent}
          />
        </div>
      </div>
    </div>
  )
}

export default App
