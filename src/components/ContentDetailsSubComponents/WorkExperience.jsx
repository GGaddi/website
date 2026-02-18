import { useState } from 'react';
import './SelfSummary.css';

function SelfSummary() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-left">
            <h1>Work Summary</h1>
            <p>I have 7+ years of web development experience, with a heavy focused on User Interface and data management.
              I utilized Typescript and Javascript with the respective Angular and React frameworks to generate components for management interface and data applications.
            </p>
            <h2>Employment at Edits LLC</h2>
            <p>For my first year of employment, I worked under Edits LLC, where I was a Junior Full-stack Web Developer. This is where I quickly learned React and NodeJS and utilized the frameworks to recreate and modernize the management UI interface for their existing testing assessement platform.
              Alongside the front-end modernization, the team and I utilized different API's. One example is  Sequelize, which was utilized in order to update the MySQL database structure as new requirements and features were requested while maintaining the existing customer data.
            </p>
            <h2>Employment at snapIoT/Covance/Fortrea</h2>
            <p>My next 6+ years of employment, I worked under the startup snapIoT, which was later acquired by Labcorp Drug Developmenat team, Covance. Our sector was then later spinned off onto what it is now known as Fortrea.
              When starting at snapIoT, I utilized my React knowledge to quickly pick up Angular to continue building onto the management application of snapIoT, which was managing clinical trial applications. This involved inviting users, inviting patients, running clinical trials, storing and sorting the data for later exporting and storage.
              I also learned flowable and groovy script language in order to create one of their most important features, the ePRO application, which was used to run the clinical trial questionnaires for multiple clients. The functionality included timed reminders, questionnaire release times and expiration times, and questionnaire schedule generation for the patients.
              This application was continued to be used, upgraded, and modified throughout my entire employment under snapIoT all the way to Fortrea.
            </p>
            <p>Alongside the questionnaire implementation, I was also tasked with the implementation of the data management implementation and security process. Due to the sensitivity of patient data, we had to make sure that the data was secured and any changed were properly audited and that data could not be easily changed.
              This involved in creating the process of locking patient and user data as well as streamlining the process of data change requests. For any request, the requester's name and approvers' names were audited, all changes were saved in the database, as well as a history of changes.
              The feature was used for not only changing data, but adding data on some occasions for any patient who did paper entries. Alongside these requests, my team and I were also tasked in handing direct data changes as approved from the client in order to make complex changes. We utilized MySQL queries to make the data changes for such situations.
            </p>
            <p>
              In the latter half of my employment, my team and I were tasked with production support. We took on client requests for new features and reports while the clinical trials were running.
              These requests were typically time sensitive and/or involved complex MySQL queries to generate data reports to client satisfactions.
            </p>
          </div>
      </div>
    </div>
  )
}

export default SelfSummary