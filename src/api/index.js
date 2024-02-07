import axios from "axios";

const URL = 'https://dummyjson.com/'

const API = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type" : 'application/json',
    }
});


export const allProducts = async () =>{
    const res = await API.get('products')
    return res.data
}

export const allCategories = async () =>{
  const res = await API.get('products/categories')
  return res.data
}