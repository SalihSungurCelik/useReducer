// sepete ürün eklemek için aksiyon oluşturan fonksiyon
export const addToCart = (product) => {
  // console.log(product);
  // aksiyon objesi, türü "ADD_TO_CART" olanı ve eklenen ürünü içerir
  return { type: "ADD_TO_CART", payload: product };
};
//sepetten ürün çıkarmak için aksiyon oluşturan fonksiyon
export const removeFromCart = (productId) => {
  console.log(productId);
  return { type: "REMOVE_FROM_CART", payload: productId };
};
