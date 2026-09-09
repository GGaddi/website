import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HoverSound from '../assets/001_Hover_01.wav';
import SelectSound from '../assets/013_Confirm_03.wav';
import './TableOfContents.css';

function TableOfContents({selectContent}) {
  const [count, setCount] = useState(0)
  const [aboutMeDropdown, setAboutMeDropdown] = useState(false);
  const [projectsDropdown, setProjects] = useState(false);
  const audioTraverseRef = useRef(null);
  const audioSelectRef = useRef(null);
  const aboutMeButtonRef = useRef(null);
  const selfSummaryRef = useRef(null);
  const workExperienceRef = useRef(null);
  const hobbiesRef = useRef(null);
  const projectsRef = useRef(null);
  const dropTetrisRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    audioTraverseRef.current = new Audio(HoverSound);
    audioTraverseRef.current.load();
    audioSelectRef.current = new Audio(SelectSound);
    audioSelectRef.current.load();
  }, [HoverSound, SelectSound]);

  const playHoverSound = () => {
    if (audioTraverseRef.current) {
      audioTraverseRef.current.currentTime = 0;
      audioTraverseRef.current.play().catch((error) => {
        console.log('Playback prevented for traversing: ', error);
      });
    }
  }

  const handleMouseEnter = (ref, event) => {
    if (ref.current) {
      ref.current.focus();
    }
  }

  const selectingContent = (selectedContent) => {
    if (audioSelectRef.current) {
      audioSelectRef.current.currentTime = 0;
      audioSelectRef.current.play().catch((error) => {
        console.log('Playback prevented for selecting: ', error);
      });
      if (selectedContent === "aboutMeDropdown") {
        setAboutMeDropdown(!aboutMeDropdown);
      } else if (selectedContent === "projectsDropdown") {
        setProjects(!projectsDropdown);
      } else {
        selectContent(selectedContent);
      }
    }
  }

  return (
    <div class="row sidebar menu">
      <nav>
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
          <li>
            <button
              class="btn table-btn"
              ref={aboutMeButtonRef}
              onMouseEnter={(e) => handleMouseEnter(aboutMeButtonRef, e)}
              onFocus={playHoverSound}
              onClick={() => selectingContent('aboutMeDropdown')}
            >
              ABOUT ME <span>{aboutMeDropdown ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            <div>
              { aboutMeDropdown ? 
                <ul class="collapse show nav flex-column ms-1" id="submenu1">
                  <li>
                    <button
                      class="btn table-btn"
                      ref={selfSummaryRef}
                      onMouseEnter={(e) => handleMouseEnter(selfSummaryRef, e)}
                      onFocus={playHoverSound}
                      onClick={() => selectingContent('selfSummary')}
                    >
                      SELF SUMMARY
                    </button>
                  </li>
                  <li>
                    <button
                      class="btn table-btn"
                      ref={workExperienceRef}
                      onMouseEnter={(e) => handleMouseEnter(workExperienceRef, e)}
                      onFocus={playHoverSound}
                      onClick={() => selectingContent('workExperience')}
                    >
                      WORK EXPERIENCE
                    </button>
                  </li>
                  <li>
                    <button
                      class="btn table-btn"
                      ref={hobbiesRef}
                      onMouseEnter={(e) => handleMouseEnter(hobbiesRef, e)}
                      onFocus={playHoverSound}
                      onClick={() => selectingContent('hobbies')}
                    >
                      HOBBIES
                    </button>
                  </li>
                </ul> : null
              }
            </div>
          </li>
          <li>
            <button
              class="btn table-btn"
              ref={projectsRef}
              onMouseEnter={(e) => handleMouseEnter(projectsRef, e)}
              onFocus={playHoverSound}
              onClick={() => selectingContent('projectsDropdown')}
            >
              PROJECTS <span>{projectsDropdown ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            <div>
              { projectsDropdown ? 
                <ul class="collapse show nav flex-column ms-1" id="submenu1">
                  <li>
                    <button
                      class="btn table-btn"
                      ref={dropTetrisRef}
                      onMouseEnter={(e) => handleMouseEnter(dropTetrisRef, e)}
                      onFocus={playHoverSound}
                      onClick={() => selectingContent('dropTetris')}
                    >
                      DROP: TETRIS CLONE
                    </button>
                  </li>
                </ul> : null
              }
            </div>
          </li>
          <li>
            <button
              class="btn table-btn"
              ref={contactsRef}
              onMouseEnter={(e) => handleMouseEnter(contactsRef, e)}
              onFocus={playHoverSound}
              onClick={() => selectingContent('contactInformation')}
            >
              CONTACT AND SOCIALS
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default TableOfContents