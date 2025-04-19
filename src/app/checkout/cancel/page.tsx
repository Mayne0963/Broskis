import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment canceled</h1>
      <p>Your payment was canceled. Feel free to try again.</p>
      <Link href="/cart">
        <button className="btn-primary mt-6">Back to Cart</button>
      </Link>
    </div>
  )
}
