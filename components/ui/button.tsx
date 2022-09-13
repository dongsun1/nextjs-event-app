import Link from "next/link";
import classes from "./button.module.css";

const Button = ({
  children,
  child,
  link,
  onClick,
}: {
  children?: React.ReactNode;
  child?: string;
  link?: string;
  onClick?: (event: any) => void;
}) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>
          {child}
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
