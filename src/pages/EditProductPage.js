import { useState, useEffect } from 'react';
import {
  PageContainers,
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
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const EditProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const [productDetails, categoriesData, brandsData] = await Promise.all([
        fetchProductsDetails(),
        fetchCategories(),
        fetchBrands(),
      ]);
      setProducts(productDetails);
      setCategories(categoriesData);
      setBrands(brandsData);
    };
    fetchData();
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct({ ...product });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.ID !== id));
      navigate('/product/edit');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleAdd = () => {
    setSelectedProduct({
      name: '',
      description: '',
      price: '',
      stock_quantity: '',
      category_id: '',
      brand_id: '',
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      const categoryId = await fetchCategoryByName(selectedProduct.category_id);
      const brandId = await fetchBrandByName(selectedProduct.brand_id);
      const productData = {
        ...selectedProduct,
        category_id: categoryId.ID,
        brand_id: brandId.ID,
      };
      const action = selectedProduct.ID ? updateProduct : addProduct;
      const updatedProduct = await action(productData, selectedProduct.ID);
      if (selectedProduct.ID) {
        setProducts(
          products.map((product) =>
            product.ID === selectedProduct.ID ? updatedProduct : product,
          ),
        );
      } else {
        setProducts([...products, updatedProduct]);
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      <PageContainers>
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
                {selectedProduct?.ID ? 'Edit Product' : 'Add New Product'}
              </h3>
              <TextInput
                label='Product Name'
                name='name'
                placeholder={'Enter the product name'}
                value={selectedProduct.name}
                onChange={handleChange}
              />
              <TextInput
                label='Description'
                name='description'
                placeholder={'Describe the product'}
                value={selectedProduct.description}
                onChange={handleChange}
              />
              <TextInput
                label='Price'
                name='price'
                placeholder={'Enter the price'}
                type='number'
                value={selectedProduct.price}
                onChange={handleChange}
              />
              <TextInput
                label='Stock Quantity'
                name='stock_quantity'
                type='number'
                placeholder={'Enter the stock quantity'}
                value={selectedProduct.stock_quantity}
                onChange={handleChange}
              />
              <SelectInput
                label='Category'
                name='category_id'
                value={selectedProduct.category_id}
                options={categories}
                placeholder='Select a category'
                onChange={handleChange}
              />
              <SelectInput
                label='Brand'
                name='brand_id'
                value={selectedProduct.brand_id}
                placeholder='Select a brand'
                options={brands}
                onChange={handleChange}
              />
              <Button onClick={handleSave}>Save</Button>
            </Modal>
          </Overlay>
        )}
      </PageContainers>
      <Footer />
    </>
  );
};

export default EditProductPage;
