'use client'
import Image from 'next/image'
import { MenuItem } from '../lib/database'
import { formatCurrency } from '../lib/utils'
import { useCart } from '../contexts/CartContext'

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart()
  return (
    <div className="surface rounded-2xl p-6 flex flex-col shadow-lg">
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mt-4">{item.name}</h3>
      <p className="text-gray-300 flex-grow mt-2">{item.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-xl">{formatCurrency(item.price)}</span>
        <button
          onClick={() => addItem({ id: item.id, name: item.name, price: item.price, quantity: 1 })}
          className="btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
