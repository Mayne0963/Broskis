import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-[#CCCCCC] py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Broski’s Kitchen. All rights reserved.</p>
      </div>
    </footer>
  )
}
