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
          <button class="btn" onClick= {() => setAboutMeDropdown(!aboutMeDropdown)}>About Me <span>{aboutMeDropdown ? <FaChevronUp /> : <FaChevronDown />}</span></button>
          <div>
            { aboutMeDropdown ? 
              <ul class="collapse show nav flex-column ms-1" id="submenu1">
                <li><button class="btn" onClick= {() => selectContent("selfSummary")}>Self Summary</button></li>
                <li><button class="btn" onClick= {() => selectContent("workExperience")}>Work Experience</button></li>
                <li><button class="btn" onClick= {() => selectContent("hobbies")}>Hobbies</button></li>
              </ul> : null
            }
          </div>
        </li>
        <li>
          <button class="btn" onClick= {() => setProjects(!projectsDropdown)}>Projects <span>{projectsDropdown ? <FaChevronUp /> : <FaChevronDown />}</span></button>
          <div>
            { projectsDropdown ? 
              <ul class="collapse show nav flex-column ms-1" id="submenu1">
                <li><button class="btn" onClick= {() => selectContent("dropTetris")}>Drop: Tetris Clone</button></li>
                <li><button class="btn" onClick= {() => selectContent("quisine")}>Quisine</button></li>
                <li><button class="btn" onClick= {() => selectContent("timeyQuest")}>Timey Quest: The Productivity RPG</button></li>
                <li><button class="btn" onClick= {() => selectContent("soloSD")}>soloSD</button></li>
              </ul> : null
            }
          </div>
        </li>
        <li><button class="btn" onClick= {() => selectContent("contactInformation")}>Contact Information and Socials</button></li>
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