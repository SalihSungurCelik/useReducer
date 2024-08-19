import { useReducer } from "react";
import { ProductList } from "./components/ProductList";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  // const initialState = {
  //   cart: [],
  // };
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <>
      <ProductList dispatch={dispatch} />
    </>
  );
}

export default App;
