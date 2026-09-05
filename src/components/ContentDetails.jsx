import { useState, useEffect } from 'react';
import './ContentDetails.css';
import ContactInformation from './ContentDetailsSubComponents/ContactInformation.jsx';
import Hobbies from './ContentDetailsSubComponents/Hobbies.jsx';
import SelfSummary from './ContentDetailsSubComponents/SelfSummary.jsx';
import WorkExperience from './ContentDetailsSubComponents/WorkExperience.jsx'
import DropTetris from './ContentDetailsSubComponents/DropTetris.jsx';

function ContentDetails({show, selectedContent}) {
  const [count, setCount] = useState(0)
  const [fadeInClass, setFadeInClass] = useState('animate-content-fade-in');
  const [fadeOutClass, setFadeOutClass] = useState('animate-content-fade-out');
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div class="content-details"
      className={show ? '' : fadeOutClass}
      onAnimationEnd={onAnimationEnd}
    >
      { selectedContent === "contactInformation" && <ContactInformation fadeInClass={fadeInClass}/>}
      { selectedContent === "hobbies" && <Hobbies fadeInClass={fadeInClass}/>}
      { selectedContent === "selfSummary" && <SelfSummary fadeInClass={fadeInClass}/>}
      { selectedContent === "workExperience" && <WorkExperience fadeInClass={fadeInClass}/>}
      { selectedContent === "dropTetris" && <DropTetris fadeInClass={fadeInClass}/>}
    </div>
  )
}

export default ContentDetails