import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './TableOfContents.css';

function TableOfContents({selectContent}) {
  const [count, setCount] = useState(0)
  const [aboutMeDropdown, setAboutMeDropdown] = useState(false);
  const [projectsDropdown, setProjects] = useState(false);

  return (
    <div class="row sidebar menu">
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
        <li>
          <button class="btn" onClick= {() => setAboutMeDropdown(!aboutMeDropdown)}>ABOUT ME <span>{aboutMeDropdown ? <FaChevronUp /> : <FaChevronDown />}</span></button>
          <div>
            { aboutMeDropdown ? 
              <ul class="collapse show nav flex-column ms-1" id="submenu1">
                <li><button class="btn" onClick= {() => selectContent("selfSummary")}>SELF SUMMARY</button></li>
                <li><button class="btn" onClick= {() => selectContent("workExperience")}>WORK EXPERIENCE</button></li>
                <li><button class="btn" onClick= {() => selectContent("hobbies")}>HOBBIES</button></li>
              </ul> : null
            }
          </div>
        </li>
        <li>
          <button class="btn" onClick= {() => setProjects(!projectsDropdown)}>PROJECTS <span>{projectsDropdown ? <FaChevronUp /> : <FaChevronDown />}</span></button>
          <div>
            { projectsDropdown ? 
              <ul class="collapse show nav flex-column ms-1" id="submenu1">
                <li><button class="btn" onClick= {() => selectContent("dropTetris")}>DROP: TETRIS CLONE</button></li>
              </ul> : null
            }
          </div>
        </li>
        <li><button class="btn" onClick= {() => selectContent("contactInformation")}>CONTACT AND SOCIALS</button></li>
      </ul>
        {/* <table>
            <td>
                <tr>Self Summary</tr>
                <tr>Work Experience</tr>
                <tr>Hobbies</tr>
            </td>
        </table> */}
    </div>
  )
}

export default TableOfContents