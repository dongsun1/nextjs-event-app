import { DUMMY } from "../../interface/dummy";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = ({ items }: { items: DUMMY[] }) => {
  return (
    <ul className={classes.list}>
      {items.map(({ id, title, location, date, image }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          location={location}
          date={date}
          image={image}
        />
      ))}
    </ul>
  );
};

export default EventList;
