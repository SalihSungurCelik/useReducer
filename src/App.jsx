import { useReducer } from "react";
import { ProductList } from "./components/ProductList";
import { cartReducer } from "./reducers/cartReducer";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  // const initialState = {
  //   cart: [],
  // };
  // useReducer hooku kullanılarak state ve dispatch fonksiyonunu oluşturur
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  // console.log(state);
  return (
    <>
      {/* Ürün listesi bileşeni, state ve dispatch fonksiyonunu birlikte çağrılır. */}
      <ProductList dispatch={dispatch} />
      {/* mevcut seper durumu ve dispatch fonksiyonu birlikte çağırılır */}
      <ShoppingCart cart={state.cart} dispatch={dispatch} />
    </>
  );
}

export default App;
