import { getMenuItems } from '../../../lib/database';

export default function ProductsPage() {
  const items = getMenuItems();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="surface rounded p-4">
            <p><strong>{item.name}</strong> (${item.price})</p>
          </li>
        ))}
      </ul>
    </div>
);
}
