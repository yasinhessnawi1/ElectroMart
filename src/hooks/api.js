import axios from 'axios';

export const fetchProductDetails = async (id) => {
  const response = await fetch('https://electromart-server-bc815d5b516d.herokuapp.com/products/' + id);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data: ' + response.status);
  }
  return response.json();
};

export const fetchProductsDetails = async () => {
  const response = await fetch('https://electromart-server-bc815d5b516d.herokuapp.com/products');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data: ' + response.status);
  }
  return response.json();
};


export const searchProducts = async (searchParams) => {
  try {
    // Construct query parameters from the searchParams object
    console.log(searchParams);
    const url = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/${searchParams}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get('https://electromart-server-bc815d5b516d.herokuapp.com/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const fetchBrands = async () => {
  try {
    const response = await axios.get('https://electromart-server-bc815d5b516d.herokuapp.com/brand');
    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
  }
};