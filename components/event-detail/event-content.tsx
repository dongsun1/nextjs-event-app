import classes from "./event-content.module.css";

function EventContent({ children }: { children: React.ReactElement }) {
  return <section className={classes.content}>{children}</section>;
}

export default EventContent;
