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

export const searchProducts = async (searchParams) => {
  const url3 = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/?name=${encodeURIComponent(searchParams)}`;
  const url = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/?brand_name=${encodeURIComponent(searchParams)}`;
  const url1 = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/?category_name=${encodeURIComponent(searchParams)}`;
  const url2 = `https://electromart-server-bc815d5b516d.herokuapp.com/search-products/?description=${encodeURIComponent(searchParams)}`;
  const urls = [url, url1, url2, url3];

  const requests = urls.map((url) =>
    fetch(url).then((response) => (response.ok ? response.json() : [])),
  );

  try {
    const results = await Promise.all(requests);
    const data = results.flat();

    // Deduplicate data by ID using a Map
    let uniqueProducts = new Map();
    data.forEach((product) => {
      console.log('Product name:', product.name); // Log product name
      product.image = process.env.PUBLIC_URL + `/products/${product.name}.webp`; // Add image URL
      console.log('Image URL:', product.image); // Log image URL
      uniqueProducts.set(product.ID, product);
    });

    return Array.from(uniqueProducts.values()).reverse();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
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

export const fetchCategoryByName = async (name) => {
  const response = await fetch(
    `https://electromart-server-bc815d5b516d.herokuapp.com/search-categories/?name=${encodeURIComponent(name)}`,
  );
  return await response.json(); // Assuming the API returns an array with the matching category as the first element
};

export const fetchBrandByName = async (name) => {
  const response = await fetch(
    `https://electromart-server-bc815d5b516d.herokuapp.com/search-brands/?name=${encodeURIComponent(name)}`,
  );
  return await response.json(); // Assuming the API returns an array with the matching brand as the first element
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
    const products = await response.json();
    products.forEach((product) => {
      product.image = process.env.PUBLIC_URL + `/products/${product.name}.webp`;
    });
    return products;
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
    const products = await response.json();
    products.forEach((product) => {
      product.image = process.env.PUBLIC_URL + `/products/${product.name}.webp`;
    });
    return products;
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
export const addProduct = async (productData) => {
  return await fetch(
    'https://electromart-server-bc815d5b516d.herokuapp.com/products',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
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
  const product = await response.json();
  product.image = process.env.PUBLIC_URL + `/products/${product.name}.webp`; // Add image URL
  return product;
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
  const products = await response.json();
  products.forEach((product) => {
    product.image = process.env.PUBLIC_URL + `/products/${product.name}.webp`; // Add image URL
  });
  return products;
};

export const updateProduct = async (productData, id) => {
  return await fetch(
    `https://electromart-server-bc815d5b516d.herokuapp.com/products/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    },
  );
};

export const deleteProduct = async (id) => {
  return await fetch(
    `https://electromart-server-bc815d5b516d.herokuapp.com/products/${id}`,
    {
      method: 'DELETE',
    },
  );
};
export const addCategory = async (categoryData) => {
  console.log(categoryData);
  return await axios.post(
    'https://electromart-server-bc815d5b516d.herokuapp.com/categories',
    categoryData,
  );
};

export const updateCategory = async (categoryData, id) => {
  return await axios.put(
    `https://electromart-server-bc815d5b516d.herokuapp.com/categories/${id}`,
    categoryData,
  );
};

export const deleteCategory = async (id) => {
  return await axios.delete(
    `https://electromart-server-bc815d5b516d.herokuapp.com/categories/${id}`,
  );
};
export const addBrand = async (brandData) => {
  return await axios.post(
    'https://electromart-server-bc815d5b516d.herokuapp.com/brand',
    brandData,
  );
};

export const updateBrand = async (brandData, id) => {
  return await axios.put(
    `https://electromart-server-bc815d5b516d.herokuapp.com/brand/${id}`,
    brandData,
  );
};

export const deleteBrand = async (id) => {
  return await axios.delete(
    `https://electromart-server-bc815d5b516d.herokuapp.com/brand/${id}`,
  );
};
