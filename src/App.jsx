import { useState } from 'react';
import './App.css';
import NameTag from './components/NameTag.jsx';
import TableOfContents from './components/TableOfContents.jsx';
import ContentDetails from './components/ContentDetails.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [selectedContent, setSelectedContent] = useState("");
  const [showContent, setShowContent] = useState(false);

  return (
    <div class="container-fluid background min-vh-100">
      <div class="row fullRow align-items-start">
        <div class="col-md-3">
          <NameTag
          />
          <TableOfContents
            showContent={setShowContent}
            selectContent={setSelectedContent}
          />
        </div>
        <div class="col-md-1 col-sm-0">
        {/* empty space between content and menu. Need to remove under mobile */}
        </div>
        <div class="col-md-8 col-sm-9" id="content-container">
          <ContentDetails
            show={showContent}
            selectedContent={selectedContent}
          />
        </div>
      </div>
    </div>
  )
}

export default App
