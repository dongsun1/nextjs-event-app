import classes from "./event-content.module.css";

function EventContent({ childeren }) {
  return <section className={classes.content}>{children}</section>;
}

export default EventContent;
