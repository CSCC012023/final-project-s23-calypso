import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import sampleProductImage2 from '../../assets/sampleProductImage2.jpg'
import Button from 'react-bootstrap/Button';
import { useLocalStorage } from '../../hooks/useLocalStorage';


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
  const { removeItem } = useShoppingCart();
  const [storeItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex items-center space-x-2">
      <img
        src={item.imageSrc}
        className="w-32 h-20 object-cover"
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
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItem(item.id)}
      >
        &times;
      </Button>
    </div>
  );
}