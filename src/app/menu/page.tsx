import { getMenuItems } from '../../lib/database'
import MenuItemCard from '../../components/MenuItemCard'
import AgeVerificationModal from '../../components/AgeVerificationModal'
import { useAgeVerificationContext } from '../../contexts/AgeVerificationContext'

export default function MenuPage() {
  const { ageVerified } = useAgeVerificationContext();
  const items = getMenuItems().filter(item => ageVerified || !item.infused);

  return (
    <>
      <AgeVerificationModal />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
