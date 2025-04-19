import { getEvents } from '../../lib/database'
import Link from 'next/link'

export default function EventsPage() {
  const events = getEvents()
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <ul className="space-y-4">
        {events.map(evt => (
          <li key={evt.id} className="bg-gray-800 rounded p-4">
            <h2 className="text-2xl font-semibold">{evt.title}</h2>
            <p className="mt-1">{new Date(evt.date).toDateString()}</p>
            <p className="mt-2">{evt.description}</p>
            <Link href={`/events/${evt.id}`}>
              <button className="btn-primary mt-2">Learn More</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
