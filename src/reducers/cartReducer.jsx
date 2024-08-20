export const cartReducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    // eğer aksiyon type'ı ADD_TO_CART ise
    case "ADD_TO_CART":
      // state içindeki sepet dizisine yeni bir ürün eklenir.
      return { cart: [...state.cart, action.payload] };
    // eğer aksiyon type'ı REMOVE_FROM_CART ise
    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((item) => item.id !== action.payload) };

    // varsayılan durum herhangi bir aksiyon durumuyla eşleşmezse
    default:
      return state;
  }
};
