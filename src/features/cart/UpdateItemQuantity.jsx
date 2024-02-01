import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

function UpdateQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(increaseQuantity(id))}>
        +
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateQuantity;
