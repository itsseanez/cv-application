import { useState } from 'react'
import styles from '../styles/FormInput.module.css'
import Button from './Button.jsx';

export default function PracticalExperience({onSubmit}) {
      const [formData, setFormData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [currentFormData, setCurrentFormData] = useState(null)

  function handleCancel() {
    if(currentFormData) {
        setFormData(currentFormData)
        setIsSubmitted(true);
    } else {
        setFormData({ company: "", position: "", startDate: "", endDate: "", responsibilities: "" })
    }
  }

  function handleChange(e) {
    setIsSubmitted(false);
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    setCurrentFormData(formData)
    setIsSubmitted(true);
  }
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.title}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase</title><path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" /></svg>
               <h2>Practical Experience</h2>
            </div>
            <label className={styles.label}>
                Company Name: 
                <input type="text" name="company" value={formData.company} onChange={handleChange} required disabled={isSubmitted} />
            </label>
            <label className={styles.label}>
                Position Title: 
                <input type="text" name="position" value={formData.position} onChange={handleChange} required disabled={isSubmitted} />
            </label>
            <label className={styles.label}>
                Start Date: 
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required disabled={isSubmitted} />
            </label>
            <label className={styles.label}>
                End Date: 
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required disabled={isSubmitted} />
            </label>
            <label className={styles.label}>
                Responsibilities: 
                <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} required disabled={isSubmitted}></textarea>
            </label>
            <div className={styles.buttons}>
                    {!isSubmitted && <Button />}
                    {isSubmitted && <Button type="button" text="Edit" onClick={handleChange}/>}
                    {!isSubmitted && <Button type="button" text="Cancel" variant="secondary" onClick={handleCancel}/>}
            </div>
        </form>
    );
}