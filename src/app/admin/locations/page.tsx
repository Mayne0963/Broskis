import { getLocations } from '../../../lib/database';

export default function AdminLocationsPage() {
  const locations = getLocations();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Locations</h1>
      <ul className="space-y-4">
        {locations.map(loc => (
          <li key={loc.id} className="surface rounded p-4">
            <p><strong>{loc.name}</strong> - {loc.address}</p>
          </li>
        ))}
      </ul>
    </div>
);
}
