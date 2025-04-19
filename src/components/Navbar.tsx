'use client'
import Link from 'next/link'
import CartDropdown from './CartDropdown'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-sm bg-black text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Broski’s Kitchen</Link>
        <div className="flex items-center space-x-4">
          <Link href="/menu">Menu</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/events">Events</Link>
          <Link href="/rewards">Rewards</Link>
          <CartDropdown />
          <Link href="/auth/login">Login</Link>
        </div>
      </div>
    </nav>
  )
}
