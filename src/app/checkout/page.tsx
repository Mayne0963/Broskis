'use client'
import { useCart } from '../../contexts/CartContext'
import { createCheckoutSession } from '../../lib/ecommerce'
import { formatCurrency } from '../../lib/utils'

export default function CheckoutPage() {
  const { items, total } = useCart()

  const handleCheckout = async () => {
    const lineItems = items.map(item => ({
      priceId: item.id,
      quantity: item.quantity
    }))
    const { url } = await createCheckoutSession(lineItems)
    window.location.href = url
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {items.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right font-bold">
            Total: {formatCurrency(total)}
          </div>
          <button onClick={handleCheckout} className="btn-primary mt-6">Pay with Card</button>
        </>
      )}
    </div>
  )
}
