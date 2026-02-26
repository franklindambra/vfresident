import { getEvents } from "@/app/data-access/actions";

export default async function Events() {
  const events = await getEvents();

  if (!events || events.length === 0) {
    return <div>No events found.</div>;
  }

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
