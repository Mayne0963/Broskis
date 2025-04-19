import { getMenuItemById } from '../../../lib/database'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { formatCurrency } from '../../../lib/utils'
import AddToCartButton from '../../../components/AddToCartButton'
import AgeVerificationModal from '../../../components/AgeVerificationModal'
import { useAgeVerificationContext } from '../../../contexts/AgeVerificationContext'

interface PageProps {
  params: { id: string }
}

export default function ProductPage({ params }: PageProps) {
  const { ageVerified } = useAgeVerificationContext();
  const item = getMenuItemById(params.id)
  if (!item) return notFound()
  if (item.infused && !ageVerified) {
    return (
      <>
        <AgeVerificationModal />
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-secondary">You must verify your age to view this item.</p>
        </div>
      </>
    )
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="md:flex md:space-x-6">
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image src={item.image} alt={item.name} fill className="object-cover rounded-md" />
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h1 className="text-4xl font-semibold">{item.name}</h1>
          <p className="text-gray-300 mt-4">{item.description}</p>
          <p className="text-2xl font-bold mt-4">{formatCurrency(item.price)}</p>
          <AddToCartButton item={item} />
        </div>
      </div>
    </div>
  )
}
