import styles from "../styles/Button.module.css";

export default function Button({
  text = "Submit",
  variant = "primary",
  type = "button"
}) {
  return (
    <button type={type} className={styles[variant]}>
      {text}
    </button>
  );
}
