import axios from 'axios';

export const updateUser = async (formData, id) => {
  return await fetch(
    `https://electromart-server-bc815d5b516d.herokuapp.com/users/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    },
  );
};

export const fetchProductDetails = async (id) => {
  const response = await fetch(
    'https://electromart-server-bc815d5b516d.herokuapp.com/products/' + id,
  );
  if (!response.ok) {
    throw new Error(
      'An error occurred while fetching the data: ' + response.status,
    );
  }
  return response.json();
};

export const fetchProductsDetails = async () => {
  const response = await fetch(
    'https://electromart-server-bc815d5b516d.herokuapp.com/products',
  );
  if (!response.ok) {
    throw new Error(
      'An error occurred while fetching the data: ' + response.status,
    );
  }
  return response.json();
};

export const searchProducts = async (searchParams) => {
  try {
    // Construct query parameters from the searchParams object
    const url = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/${searchParams}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  const response = await axios.get(
    'https://electromart-server-bc815d5b516d.herokuapp.com/categories',
  );
  return response.data;
};

export const fetchBrands = async () => {
  const response = await axios.get(
    'https://electromart-server-bc815d5b516d.herokuapp.com/brand',
  );
  return response.data;
};

export const fetchLogin = async (username, password) => {
  try {
    const user = JSON.stringify({ username, password });
    console.log(user);
    return await fetch(
      'https://electromart-server-bc815d5b516d.herokuapp.com/login',
      {
        method: 'POST',
        body: user,
      },
    );
  } catch (error) {
    console.error('Error fetching login:', error);
    return null;
  }
};
export const fetchUser = async (username) => {
  try {
    const response = await axios.get(
      `https://electromart-server-bc815d5b516d.herokuapp.com/search-users/?username=${username}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.status === 200) {
      throw new Error(
        'An error occurred while fetching the data: ' + response.status,
      );
    }
    return response.data[0];
  } catch (error) {
    console.error('Error fetching role:', error);
    return null;
  }
};
export const fetchRole = async (token) => {
  try {
    const response = await axios.get(
      'https://electromart-server-bc815d5b516d.herokuapp.com/protected',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.status === 200) {
      throw new Error(
        'An error occurred while fetching the data: ' + response.status,
      );
    }
    return response.data.role;
  } catch (error) {
    console.error('Error fetching role:', error);
    return null;
  }
};

export const addUser = async (formData) => {
  return await fetch(
    'https://electromart-server-bc815d5b516d.herokuapp.com/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    },
  );
};
export const fetchCategoryInfo = async (id) => {
  try {
    const url = `https://electromart-server-bc815d5b516d.herokuapp.com/categories/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

export const fetchCategoryItems = async (id) => {
  try {
    const info = await fetchCategoryInfo(id);
    const url = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/?category_name=${info.name}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
export const fetchBrandItems = async (id) => {
  try {
    const info = await fetchBrandInfo(id);
    if (info.name === '') {
      return null;
    }
    const url = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/?brand_name=${info.name}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
export const fetchBrandInfo = async (id) => {
  try {
    const url = `https://electromart-server-bc815d5b516d.herokuapp.com/brand/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
