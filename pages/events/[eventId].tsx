import { NextPage } from "next";
import { useRouter } from "next/router";

const EventDetailPage: NextPage = () => {
  const { query: { eventId } = {} } = useRouter();
  return (
    <div>
      <h1>Event Detail</h1>
      {eventId}
    </div>
  );
};

export default EventDetailPage;
