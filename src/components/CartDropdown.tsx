'use client'
import Link from 'next/link'
import { useCart } from '../contexts/CartContext'
import { formatCurrency } from '../lib/utils'

export default function CartDropdown() {
  const { items, total, removeItem } = useCart()
  return (
    <div className="relative inline-block text-left">
      <button className="relative">
        🛒
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-secondary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>
      <div className="absolute right-0 mt-2 w-72 surface border border-gray-700 p-4 rounded-2xl shadow-lg">
        {items.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center py-1">
                <div>{item.name} x {item.quantity}</div>
                <button onClick={() => removeItem(item.id)} className="text-secondary">&times;</button>
              </li>
            ))}
          </ul>
        )}
        {items.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <Link href="/checkout">
              <button className="btn-primary w-full mt-4">Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
