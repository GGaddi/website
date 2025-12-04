import { useState } from 'react'
import './TableOfContents.css'

function TableOfContents() {
  const [count, setCount] = useState(0)
  const [aboutMeDropdown, setAboutMeDropdown] = useState(false);

  const changeAboutMeDropdown = () => {setAboutMeDropdown(!aboutMeDropdown)};
  return (
    <div class="sidebar">
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
        <li>
          <button class="btn" onClick={changeAboutMeDropdown}>About Me</button>
          <div>
            { aboutMeDropdown ? 
              <ul class="collapse show nav flex-column ms-1" id="submenu1">
                <li><button class="btn">Self Summary</button></li>
                <li><button class="btn">Work Experience</button></li>
                <li><button class="btn">Hobbies</button></li>
              </ul> : null
            }
          </div>
        </li>
        <li><button class="btn">Contact Information</button></li>
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