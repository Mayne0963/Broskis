'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {submitted ? (
        <p className="text-green-400">Thank you for your message! We'll be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 bg-gray-800 text-white rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 bg-gray-800 text-white rounded" required />
          <textarea placeholder="Message" className="w-full p-2 bg-gray-800 text-white rounded" rows={4} required />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      )}
    </div>
  )
}
