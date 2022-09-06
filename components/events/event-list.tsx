import { DUMMY } from "../../interface/dummy";
import EventItem from "./event-item";

const EventList = (items: DUMMY[]) => {
  return (
    <ul>
      {items.map((e) => (
        <EventItem />
      ))}
    </ul>
  );
};

export default EventList;
