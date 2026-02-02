import styles from "../styles/Button.module.css";

export default function Button({
  text = "Submit",
  variant = "primary",
  type = "submit",
  onClick = () => {}
}) {
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      {text}
    </button>
  );
}
