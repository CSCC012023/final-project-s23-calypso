import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { CButton } from '@coreui/react';

type CartItemProps = {
  id: number;
  quantity: number;
};

type CartItem = {
  id: number;
  quantity: number;
  name: string,
  artist: string,
  style: string,
  price: number,
  href: string,
  imageSrc: string,
  imageAlt: string,
  date: number,
  rarity: string,
  medium: string,
  material: string,
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem, cartItems } = useShoppingCart();
  const item = cartItems.find((i) => i.id === id);

  if (!item) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4 py-2">
      <img
        src={item.imageSrc}
        className="w-20 h-16 object-cover rounded-lg"
        alt={item.name}
      />
      <div className="flex-grow">
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className="text-gray-500 text-xs">x{quantity}</span>
          )}
        </div>
        <div className="text-gray-500 text-xs">
          {item.artist}
        </div>
      </div>
      <div className="w-24 text-right"> {formatCurrency(item.price * quantity)}</div>
      <CButton
        color="danger"
        size="sm"
        onClick={() => removeItem(item.id)}
        variant="outline"
        className="h-full"
      >
        &times;
      </CButton>
    </div>
  );
}
