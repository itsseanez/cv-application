import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [educationExperience, setEducationExperience] = useState(null);
  const [practicalExperience, setPracticalExperience] = useState(null);

  return (
    <div className="container">
      <header>
        <h1>CV Application.</h1>
      </header>
      <aside>
        <GeneralInformation onSubmit={setGeneralInfo} />
        <EducationalExperience onSubmit={setEducationExperience}/>
        <PracticalExperience onSubmit={setPracticalExperience}/>
      </aside>
      <main>
        {generalInfo && <h1>{generalInfo.name}</h1>}
        {generalInfo && <p>{generalInfo.email}</p>}
        {generalInfo && <p>{generalInfo.phone}</p>}
        {educationExperience && <h2>{educationExperience.school}</h2>}
        {educationExperience && <p>{educationExperience.degree}</p>}
        {educationExperience && <p>{educationExperience.completionDate}</p>}
        {practicalExperience && <h2>{practicalExperience.company}</h2>}
        {practicalExperience && <p>{practicalExperience.position}</p>}
        {practicalExperience && <p>{practicalExperience.startDate}</p>}
        {practicalExperience && <p>{practicalExperience.endDate}</p>}
        {practicalExperience && <p>{practicalExperience.responsibilities}</p>}
      </main>
    </div>
  );
}
