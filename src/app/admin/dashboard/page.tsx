import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <ul className="space-y-2">
        <li><Link href="/admin/orders" className="text-primary">Manage Orders</Link></li>
        <li><Link href="/admin/products" className="text-primary">Manage Products</Link></li>
        <li><Link href="/admin/events" className="text-primary">Manage Events</Link></li>
        <li><Link href="/admin/locations" className="text-primary">Manage Locations</Link></li>
        <li><Link href="/admin/loyalty" className="text-primary">Manage Loyalty</Link></li>
      </ul>
    </div>
);
