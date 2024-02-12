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

export const getChosenCategory = async (category) =>{
  const res = await API.get('products/category/' + category)
  return res.data
}

export const getSearchProducts = async (data) =>{
  const res = await API.get('products/search?q=' + data)
  return res.data
}

export const getPaginatedProducts = async (data) =>{
  const res = await API.get('products/?limit=10&skip=' + data)
  return res.data
}