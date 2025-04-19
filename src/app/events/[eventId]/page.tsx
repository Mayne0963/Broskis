import { getEventById } from '../../../lib/database'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { eventId: string }
}

export default function EventDetail({ params }: PageProps) {
  const evt = getEventById(params.eventId)
  if (!evt) return notFound()
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{evt.title}</h1>
      <p className="text-gray-400 mb-2">{new Date(evt.date).toDateString()}</p>
      <p className="mt-4">{evt.description}</p>
    </div>
  )
}
