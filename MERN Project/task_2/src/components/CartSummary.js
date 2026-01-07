import { Badge, ListGroup, Alert, Button } from 'react-bootstrap';  // ✅ Added Button import
import { useCart } from './CartContext';

const CartSummary = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <Alert variant="info" className="text-center">
        Cart empty
      </Alert>
    );
  }

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <>
      <h5>Cart Summary ({cart.length} items) <Badge bg="danger">{total.toFixed(2)}</Badge></h5>
      <ListGroup className="mb-3">
        {cart.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {item.title} x{item.quantity || 1} - ${(item.price * (item.quantity || 1)).toFixed(2)}
            <Button size="sm" variant="outline-danger" onClick={() => removeFromCart(item)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CartSummary;
