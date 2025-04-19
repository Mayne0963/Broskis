'use client'
import { useCart } from '../../contexts/CartContext'
import { formatCurrency } from '../../lib/utils'
import Link from 'next/link'

export default function CartPage() {
  const { items, total, removeItem, clearCart } = useCart()

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">{item.name}</span> x {item.quantity}
                </div>
                <div className="flex items-center space-x-4">
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                  <button onClick={() => removeItem(item.id)} className="text-secondary">&times;</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold">Total: {formatCurrency(total)}</span>
            <div className="space-x-2">
              <button onClick={() => clearCart()} className="btn-secondary">Clear Cart</button>
              <Link href="/checkout"><button className="btn-primary">Checkout</button></Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
