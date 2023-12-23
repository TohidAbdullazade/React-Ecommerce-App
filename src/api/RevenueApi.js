export const getRevenue = async () => {
  let res = await fetch("https://dummyjson.com/carts");
  let data = await res.json();
  return data;
  
};






