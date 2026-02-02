import { useState } from "react";
import styles from "../styles/FormInput.module.css";
import Button from "./Button.jsx";

export default function GeneralInformation({onSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [currentFormData, setCurrentFormData] = useState(null)

  function handleCancel() {
    if(currentFormData) {
        setFormData(currentFormData)
        setIsSubmitted(true);
    } else {
        setFormData({ name: "", email: "", phone: "" })
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>account</title>
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
        <h2>General Information</h2>
      </div>
      <label className={styles.label}>
        Full Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitted}/>
      </label>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitted}/>
      </label>
      <label className={styles.label}>
        Phone Number:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required disabled={isSubmitted}/>
      </label>
      <div className={styles.buttons}>
        {!isSubmitted && <Button />}
        {isSubmitted && <Button type="button" text="Edit" onClick={handleChange}/>}
        {!isSubmitted && <Button type="button" text="Cancel" variant="secondary" onClick={handleCancel}/>}
      </div>
    </form>
  );
}
