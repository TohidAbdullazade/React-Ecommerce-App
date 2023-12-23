export const getAllUsers = async () =>{
let res = await fetch('https://dummyjson.com/users');
let users = await res.json();
return users;
};

