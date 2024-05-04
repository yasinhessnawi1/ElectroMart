import { useState, useEffect } from 'react';
import {
  PageContainer,
  Card,
  Button,
  Modal,
  Overlay,
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

  const handleDelete = (id) => {
    deleteBrand(id).then(() => {
      setBrands(brands.filter((brand) => brand.ID !== id));
      navigate('/brand/edit');
    });
  };

  const handleAdd = () => {
    setSelectedBrand({
      name: '',
      description: '',
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    const action = selectedBrand.ID ? updateBrand : addBrand;
    try {
      await action(selectedBrand, selectedBrand.ID);
      fetchBrands().then(setBrands); // Refresh list after adding or updating
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
      <PageContainer>
        {brands.map((brand) => (
          <Card key={brand.ID}>
            <span>{brand.name}</span>
            <div>
              <Button onClick={() => handleSelectBrand(brand)}>Edit</Button>
              <Button onClick={() => handleDelete(brand.ID)}>Delete</Button>
            </div>
          </Card>
        ))}
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
      </PageContainer>
      <Footer />
    </>
  );
};

export default EditBrandPage;
