import { useState } from "react";
import styles from "../styles/FormInput.module.css";
import Button from "./Button.jsx";

export default function EducationalExperience({ onSubmit }) {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    completionDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [currentFormData, setCurrentFormData] = useState(null);

  function handleCancel() {
    if (currentFormData) {
      setFormData(currentFormData);
      setIsSubmitted(true);
    } else {
      setFormData({ school: "", degree: "", completionDate: "" });
    }
  }

  function handleChange(e) {
    setIsSubmitted(false);
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    setCurrentFormData(formData);
    setIsSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.title}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>school-outline</title>
          <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
        </svg>
        <h2>Educational Experience</h2>
      </div>
      <label className={styles.label}>
        School Name:
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        />
      </label>
      <label className={styles.label}>
        Title of Study:
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        />
      </label>
      <label className={styles.label}>
        Date of Study:
        <input
          type="date"
          name="completionDate"
          value={formData.completionDate}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        />
      </label>
      <div className={styles.buttons}>
        {!isSubmitted && <Button />}
        {isSubmitted && (
          <Button type="button" text="Edit" onClick={handleChange} />
        )}
        {!isSubmitted && (
          <Button
            type="button"
            text="Cancel"
            variant="secondary"
            onClick={handleCancel}
          />
        )}
      </div>
    </form>
  );
}
