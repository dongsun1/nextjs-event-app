import classes from "./event-summary.module.css";

function EventSummary({ title }: { title: string }) {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
