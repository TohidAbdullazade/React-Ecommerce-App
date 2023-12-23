export const getOrders = async () => {
  let res = await fetch("https://dummyjson.com/carts/1");
  let product = await res.json();
  return product;
};
