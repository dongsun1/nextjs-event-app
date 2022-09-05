import { NextPage } from "next";
import Link from "next/link";

export interface Event {
  eventId: number;
  eventName: string;
  eventDate: string;
}

interface EventArr extends Array<Event> {}

const Events: NextPage = () => {
  const dummy: EventArr = [
    { eventId: 0, eventName: "hi", eventDate: "2022/09" },
    { eventId: 1, eventName: "hello", eventDate: "2022/10" },
  ];
  return (
    <div>
      <h1>Events</h1>
      {dummy.map((dummy) => (
        <li key={dummy.eventId}>
          <Link
            href={{
              pathname: "/events/[id]",
              query: { id: dummy.eventId },
            }}
          >
            {dummy.eventName}
          </Link>
        </li>
      ))}
      {dummy.map((dummy) => (
        <li key={dummy.eventDate}>
          <Link
            href={{
              pathname: "/events/[...slug]",
              query: { slug: dummy.eventDate },
            }}
          >
            {dummy.eventDate}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Events;
