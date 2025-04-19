import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p>Your payment was successful. We'll start preparing your order shortly.</p>
      <Link href="/">
        <button className="btn-primary mt-6">Return Home</button>
      </Link>
    </div>
  )
}
