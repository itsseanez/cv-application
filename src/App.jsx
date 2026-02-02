import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState(null);

  return (
    <div className="container">
      <header>
        <h1>CV Application.</h1>
      </header>
      <aside>
        <GeneralInformation onSubmit={setGeneralInfo} />
        <EducationalExperience />
        <PracticalExperience />
      </aside>
      <main>
        {generalInfo && <h1>{generalInfo.name}</h1>}
        {generalInfo && <p>{generalInfo.email}</p>}
        {generalInfo && <p>{generalInfo.phone}</p>}
      </main>
    </div>
  );
}
