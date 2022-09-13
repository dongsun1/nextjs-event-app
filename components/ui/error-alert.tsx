import classes from "./error-alert.module.css";

function ErrorAlert({ children }: { children: React.ReactNode }) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
