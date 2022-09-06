import { NextPage } from "next";
import Link from "next/link";

export interface Event {
  eventId: number;
  eventName: string;
  eventDate: string;
}

interface EventArr extends Array<Event> {}

const AllEventPage: NextPage = () => {
  const dummy: EventArr = [
    { eventId: 0, eventName: "hi", eventDate: "2022/09" },
    { eventId: 1, eventName: "hello", eventDate: "2022/10" },
  ];
  return (
    <div>
      <h1>All Events</h1>
      {dummy.map(({ eventId, eventName, eventDate }) => (
        <ul key={eventId}>
          <li>
            <Link
              href={{
                pathname: "/events/[eventId]",
                query: { eventId },
              }}
            >
              {eventName}
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/events/[...slug]",
                query: { slug: eventDate },
              }}
            >
              {eventDate}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AllEventPage;
