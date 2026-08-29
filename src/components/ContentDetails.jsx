import { useState } from 'react';
import './ContentDetails.css';
import ContactInformation from './ContentDetailsSubComponents/ContactInformation.jsx';
import Hobbies from './ContentDetailsSubComponents/Hobbies.jsx';
import SelfSummary from './ContentDetailsSubComponents/SelfSummary.jsx';
import WorkExperience from './ContentDetailsSubComponents/WorkExperience.jsx'
import TimeyQuest from './ContentDetailsSubComponents/TimeyQuest.jsx';
import SoloSD from './ContentDetailsSubComponents/SoloSD.jsx';
import Quisine from './ContentDetailsSubComponents/Quisine.jsx';
import DropTetris from './ContentDetailsSubComponents/DropTetris.jsx';

function ContentDetails({selectedContent}) {
  const [count, setCount] = useState(0)

  return (
    <div class="content-details" style={{padding: selectedContent === "" ? "" : "2rem"}}>
      { selectedContent === "contactInformation" && <ContactInformation />}
      { selectedContent === "hobbies" && <Hobbies />}
      { selectedContent === "selfSummary" && <SelfSummary />}
      { selectedContent === "workExperience" && <WorkExperience />}
      { selectedContent === "timeyQuest" && <TimeyQuest />}
      { selectedContent === "soloSD" && <SoloSD />}
      { selectedContent === "quisine" && <Quisine />}
      { selectedContent === "dropTetris" && <DropTetris />}
    </div>
  )
}

export default ContentDetails