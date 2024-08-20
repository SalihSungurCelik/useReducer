import { removeFromCart } from "../actions/cartActions";

export const ShoppingCart = ({ cart, dispatch }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
