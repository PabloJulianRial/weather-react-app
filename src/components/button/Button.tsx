import "./Button.scss";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({ label, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
