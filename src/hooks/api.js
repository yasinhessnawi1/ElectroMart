import axios from 'axios';

export const fetchProductDetails = async (id) => {
  const response = await fetch('http://localhost:8081/products/' + id);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data: ' + response.status);
  }
  return response.json();
};

export const fetchProductsDetails = async () => {
  const response = await fetch('http://localhost:8081/products');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data: ' + response.status);
  }
  return response.json();
};


export const searchProducts = async (searchParams) => {
  try {
    // Construct query parameters from the searchParams object
    console.log(searchParams);
    const url = `http://localhost:8081/search-products/${searchParams}`;

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
    const response = await axios.get('http://localhost:8081/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const fetchBrands = async () => {
  try {
    const response = await axios.get('http://localhost:8081/brand');
    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
  }
};