import { useState, useEffect } from 'react';
import {
  PageContainer,
  Card,
  Button,
  Modal,
  Overlay,
} from '../styles/StyledComponents';
import { TextInput, SelectInput } from '../styles/TextInput';
import {
  fetchProductsDetails,
  updateProduct,
  deleteProduct,
  addProduct,
  fetchCategories,
  fetchBrands,
  fetchBrandByName,
  fetchCategoryByName,
} from '../hooks/api';
import { useNavigate } from 'react-router-dom';

const EditProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductsDetails().then(setProducts);
    fetchCategories().then(setCategories);
    fetchBrands().then(setBrands);
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct({ ...product });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter((product) => product.ID !== id));
      navigate('/product/edit');
    });
  };

  const handleAdd = () => {
    // Set up an empty product for adding
    setSelectedProduct({
      name: '',
      description: '',
      price: 0.0,
      stock_quantity: 0,
      category_id: '',
      brand_id: '',
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    let categoryId = selectedProduct.category_id;
    let brandId = selectedProduct.brand_id;

    // If the category_id is actually a name, fetch the corresponding ID
    if (isNaN(Number(selectedProduct.category_id))) {
      const categoryData = await fetchCategoryByName(
        selectedProduct.category_id,
      );
      categoryId = categoryData ? categoryData.ID : null;
    }

    // If the brand_id is actually a name, fetch the corresponding ID
    if (isNaN(Number(selectedProduct.brand_id))) {
      const brandData = await fetchBrandByName(selectedProduct.brand_id);
      brandId = brandData ? brandData.ID : null;
    }

    const productData = {
      ...selectedProduct,
      category_id: categoryId,
      brand_id: brandId,
    };

    const action = selectedProduct.ID ? updateProduct : addProduct;
    try {
      await action(
        productData,
        selectedProduct.ID ? selectedProduct.ID : undefined,
      );
      if (selectedProduct.ID) {
        setProducts(
          products.map((product) =>
            product.ID === selectedProduct.ID
              ? { ...product, ...productData }
              : product,
          ),
        );
      } else {
        fetchProductsDetails().then(setProducts);
      }
      console.log('Product saved successfully', productData);
      setShowModal(false);
    } catch (err) {
      console.error('Error saving product:', err);
      alert('Failed to save product');
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Check if the input type is number, and convert the value to a number if true
    const isNumberField = type === 'number';
    setSelectedProduct({
      ...selectedProduct,
      [name]: isNumberField ? parseFloat(value) || 0 : value, // Convert to float and provide a fallback of 0
    });
  };

  return (
    <PageContainer>
      {products.map((product) => (
        <Card key={product.ID}>
          <span>{product.name}</span>
          <div>
            <Button onClick={() => handleSelectProduct(product)}>Edit</Button>
            <Button onClick={() => handleDelete(product.ID)}>Delete</Button>
          </div>
        </Card>
      ))}
      <Button onClick={handleAdd}>Add New Product</Button>

      {showModal && (
        <Overlay onClick={() => setShowModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h3>
              {selectedProduct && selectedProduct.ID
                ? 'Edit Product'
                : 'Add Product'}
            </h3>
            <TextInput
              label='Product Name'
              name='name'
              value={selectedProduct.name}
              onChange={handleChange}
            />
            <TextInput
              label='Description'
              name='description'
              value={selectedProduct.description}
              onChange={handleChange}
            />
            <TextInput
              label='Price'
              name='price'
              type='number'
              value={selectedProduct.price}
              onChange={handleChange}
            />
            <TextInput
              label='Stock Quantity'
              name='stock_quantity'
              type='number'
              value={selectedProduct.stock_quantity}
              onChange={handleChange}
            />
            <SelectInput
              label='Category'
              name='category_id'
              value={selectedProduct.category_id}
              options={categories}
              onChange={handleChange}
            />
            <SelectInput
              label='Brand'
              name='brand_id'
              value={selectedProduct.brand_id}
              options={brands}
              onChange={handleChange}
            />
            <Button onClick={handleSave}>Save</Button>
          </Modal>
        </Overlay>
      )}
    </PageContainer>
  );
};

export default EditProductPage;
