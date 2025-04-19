import { getLocations } from '../../lib/database'

export default function LocationsPage() {
  const locations = getLocations()
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map(loc => (
          <div key={loc.id} className="bg-gray-800 rounded p-4">
            <h2 className="text-2xl font-semibold">{loc.name}</h2>
            <p className="mt-2">{loc.type}</p>
            <p className="mt-1">{loc.address}</p>
            <p className="mt-1">Hours: {loc.hours}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-xl mb-2">Find Us On The Map</h2>
        <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-300">
          Map Placeholder
        </div>
      </div>
    </div>
  )
}
