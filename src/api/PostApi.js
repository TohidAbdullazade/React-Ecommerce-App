export const getAllPosts = async () => {
  let res = await fetch("https://dummyjson.com/posts");
  let  posts  = await res.json();
  return posts;
};
