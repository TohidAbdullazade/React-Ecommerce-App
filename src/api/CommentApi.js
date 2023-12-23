export const getAllComments = async () =>{
let res = await fetch('https://dummyjson.com/comments');
let comments = await res.json();
return comments;
}