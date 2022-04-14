import Image from "next/image";
import classes from "./Button.module.scss";
const Button = ({ title, type, icon, disabled, width }) => {
  return (
    <button
      disabled={disabled}
      className={classes.primary_button}
      style={{
        width: width && width + "%",
        background: type == "primary" ? "#0065DD" : "#ffffff",
        color: type == "primary" ? "#ffffff" : "#0065DD",
      }}
    >
      {icon && <Image src={icon} />}
      {title}
    </button>
  );
};

export default Button;
