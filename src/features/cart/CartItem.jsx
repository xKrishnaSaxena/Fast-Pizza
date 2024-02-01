import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/helpers';
import DeleteItem from './DeleteItem';
import UpdateQuantity from './UpdateItemQuantity';
import { getTotalQuantitybyId } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getTotalQuantitybyId(pizzaId));
  return (
    <li className="sm py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity id={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
