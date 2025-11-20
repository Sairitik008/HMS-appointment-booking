import "./Button.css";

export default function Button({ children, variant = "primary", onClick, type = "button" }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}