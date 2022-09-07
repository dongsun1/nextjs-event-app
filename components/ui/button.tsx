import Link from "next/link";
import classesBtn from "./button.module.css";

const Button = ({
  children,
  child,
  link,
}: {
  children: React.ReactNode;
  child: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <a className={classesBtn.btn}>
        {child}
        {children}
      </a>
    </Link>
  );
};

export default Button;
