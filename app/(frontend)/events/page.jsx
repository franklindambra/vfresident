export const dynamic = "force-dynamic";
import { getEvents } from "@/app/data-access/actions";
import Title from "@/components/Title";

export default async function Events() {
  const events = await getEvents();

  return (
    <div>
      <Title text="Events" />
      {!events || events.length === 0 ? (
        <div className="text-gray-500 italic">No events found.</div>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event._id}
              className="p-4 bg-white border border-gray-100 rounded-lg"
            >
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-gray-600">
                {event.date &&
                  new Date(event.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
              </p>
              {event.location && (
                <p className="text-sm text-gray-400">{event.location}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
