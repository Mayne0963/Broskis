'use client'
import { MenuItem } from '../lib/database'
import { useCart } from '../contexts/CartContext'

export default function AddToCartButton({ item }: { item: MenuItem }) {
  const { addItem } = useCart()
  return (
    <button
      onClick={() => addItem({ id: item.id, name: item.name, price: item.price, quantity: 1 })}
      className="btn-primary mt-4"
    >
      Add to Cart
    </button>
  )
}
