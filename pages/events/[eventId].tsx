import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const { query: { eventId } = {} } = useRouter();
  const event = getEventById(eventId as string);

  if (!event) return <p>No event found!</p>;

  return (
    <div>
      <h1>Event Detail</h1>
      {eventId}
    </div>
  );
};

export default EventDetailPage;
