import { useState } from 'react';
import './ContentDetails.css';
import ContactInformation from './ContentDetailsSubComponents/ContactInformation.jsx';
import Hobbies from './ContentDetailsSubComponents/Hobbies.jsx';
import SelfSummary from './ContentDetailsSubComponents/SelfSummary.jsx';
import WorkExperience from './ContentDetailsSubComponents/WorkExperience.jsx'

function ContentDetails({selectedContent}) {
  const [count, setCount] = useState(0)

  return (
    <div class="content-details">
      { selectedContent === "contactInformation" && <ContactInformation />}
      { selectedContent === "hobbies" && <Hobbies />}
      { selectedContent === "selfSummary" && <SelfSummary />}
      { selectedContent === "workExperience" && <WorkExperience />}

    </div>
  )
}

export default ContentDetails