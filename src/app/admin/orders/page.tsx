import { getOrders } from '../../../lib/database';

export default function OrdersPage() {
  const orders = getOrders();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <table className="w-full table-auto surface rounded">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="p-2">Order ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b border-gray-700">
              <td className="p-2">{order.id}</td>
              <td className="p-2">{new Date(order.date).toLocaleDateString()}</td>
              <td className="p-2">${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}
