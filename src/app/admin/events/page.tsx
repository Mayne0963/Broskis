import { getEvents } from '../../../lib/database';

export default function AdminEventsPage() {
  const events = getEvents();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <ul className="space-y-4">
        {events.map(evt => (
          <li key={evt.id} className="surface rounded p-4">
            <p><strong>{evt.title}</strong> ({new Date(evt.date).toLocaleDateString()})</p>
          </li>
        ))}
      </ul>
    </div>
);
}
