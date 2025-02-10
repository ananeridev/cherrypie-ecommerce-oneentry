import { defineOneEntry } from "oneentry";
// import TOKEN from "./config";

const { Menus, Products } = defineOneEntry("https://demo-ecommerce.oneentry.cloud", {
  // token: TOKEN,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXBwLXRva2VuLWRlbW8iLCJzZXJpYWxOdW1iZXIiOjIsImlhdCI6MTczODcxNzc0MCwiZXhwIjoxNzcyMjQwOTIwfQ.USKp7qaBE1BQ5yxc8Qiho8vaEvVuVuJF863OBpDtvmY'
});


export {
  Menus,
  Products
}