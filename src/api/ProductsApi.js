export const getAllProducts =  async () =>{
let res = await fetch('https://dummyjson.com/products')
let {products} = await res.json();
return products; 

}