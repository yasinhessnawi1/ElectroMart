import { useState, useEffect } from 'react';
import {
  PageContainers,
  Card,
  Button,
  Modal,
  Overlay,
  TextInfo, // Assuming you have a styled component for informational text
} from '../styles/StyledComponents';
import { TextInput } from '../styles/TextInput';
import { fetchBrands, updateBrand, deleteBrand, addBrand } from '../hooks/api';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const EditBrandPage = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands().then(setBrands);
  }, []);

  const handleSelectBrand = (brand) => {
    setSelectedBrand({ ...brand });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBrand(id);
      setBrands(brands.filter((brand) => brand.ID !== id));
      navigate('/brand/edit');
    } catch (error) {
      console.error('Error deleting brand:', error);
      alert('Failed to delete brand');
    }
  };

  const handleAdd = () => {
    setSelectedBrand({ name: '', description: '' });
    setShowModal(true);
  };

  const handleSave = async () => {
    const action = selectedBrand.ID ? updateBrand : addBrand;
    try {
      const updatedBrand = await action(selectedBrand);
      if (!selectedBrand.ID) {
        setBrands([...brands, updatedBrand]);
      } else {
        setBrands(
          brands.map((b) => (b.ID === selectedBrand.ID ? updatedBrand : b)),
        );
      }
      setShowModal(false);
    } catch (err) {
      console.error('Error saving brand:', err);
      alert('Failed to save brand');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBrand({
      ...selectedBrand,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <PageContainers>
        {brands.length ? (
          brands.map((brand) => (
            <Card key={brand.ID}>
              <span>{brand.name}</span>
              <div>
                <Button onClick={() => handleSelectBrand(brand)}>Edit</Button>
                <Button onClick={() => handleDelete(brand.ID)}>Delete</Button>
              </div>
            </Card>
          ))
        ) : (
          <TextInfo>
            No brands available. Click Add New Brand to create one.
          </TextInfo>
        )}
        <Button onClick={handleAdd}>Add New Brand</Button>

        {showModal && (
          <Overlay onClick={() => setShowModal(false)}>
            <Modal onClick={(e) => e.stopPropagation()}>
              <h3>
                {selectedBrand && selectedBrand.ID
                  ? 'Edit Brand'
                  : 'Add New Brand'}
              </h3>
              <TextInput
                label='Brand Name'
                name='name'
                value={selectedBrand.name}
                onChange={handleChange}
                placeholder='Enter brand name'
              />
              <TextInput
                label='Description'
                name='description'
                value={selectedBrand.description}
                onChange={handleChange}
                placeholder='Describe the brand'
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

export default EditBrandPage;
