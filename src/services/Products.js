// export const GET_USERS = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   return data;
// };

export const GetAllProducts = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
};

export const getSingleProduct = async (id) => {
  let res = await fetch(`https://fakestoreapi.com/products/${id}`);
  let data = await res.json();
  return data;
};
