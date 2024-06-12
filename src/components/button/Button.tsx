import "./Button.scss";

export type ButtonProps = {
  onClick?: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <button className="button" onClick={onClick}></button>;
};

export default Button;
