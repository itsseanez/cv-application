import { useState } from 'react'
import styles from '../styles/FormInput.module.css'

export default function PracticalExperience() {
    return (
        <form>
            <div className={styles.title}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase</title><path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" /></svg>
               <h2>Practical Experience</h2>
            </div>
            <label className={styles.label}>
                Company Name: 
                <input type="text" />
            </label>
            <label className={styles.label}>
                Position Title: 
                <input type="text" />
            </label>
            <label className={styles.label}>
                Start Date: 
                <input type="date" />
            </label>
            <label className={styles.label}>
                End Date: 
                <input type="date" />
            </label>
            <label className={styles.label}>
                Responsibilities: 
                <textarea></textarea>
            </label>
            <div className={styles.buttons}>
                <button>Submit</button>
            </div>
        </form>
    );
}