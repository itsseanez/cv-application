import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

export default function App() {

  return (
    <div className="container">
      <header>
        <h1>CV Application.</h1>
      </header>
      <aside>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </aside>
      <main></main>
    </div>
  );
}
