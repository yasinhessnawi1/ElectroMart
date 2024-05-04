import { useState, useEffect } from 'react';
import {
  PageContainer,
  Card,
  Button,
  Modal,
  Overlay,
} from '../styles/StyledComponents';
import { TextInput } from '../styles/TextInput';
import {
  fetchCategories,
  updateCategory,
  deleteCategory,
  addCategory,
} from '../hooks/api';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const EditCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteCategory(id).then(() => {
      setCategories(categories.filter((category) => category.ID !== id));
      navigate('/category/edit');
    });
  };

  const handleAdd = () => {
    setSelectedCategory({ name: '', description: '' });
    setShowModal(true);
  };

  const handleSave = async () => {
    const action = selectedCategory.ID ? updateCategory : addCategory;
    try {
      await action(selectedCategory, selectedCategory.ID);
      fetchCategories().then(setCategories); // Refresh list after adding or updating
      setShowModal(false);
    } catch (err) {
      alert('Failed to save category');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCategory({ ...selectedCategory, [name]: value });
  };

  return (
    <>
      <Header />
      <PageContainer>
        {categories.map((category) => (
          <Card key={category.ID}>
            <span>{category.name}</span>
            <div>
              <Button onClick={() => handleSelectCategory(category)}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(category.ID)}>Delete</Button>
            </div>
          </Card>
        ))}
        <Button onClick={handleAdd}>Add New Category</Button>

        {showModal && (
          <Overlay onClick={() => setShowModal(false)}>
            <Modal onClick={(e) => e.stopPropagation()}>
              <h3>
                {selectedCategory && selectedCategory.ID
                  ? 'Edit Category'
                  : 'Add New Category'}
              </h3>
              <TextInput
                label='Category Name'
                name='name'
                value={selectedCategory.name}
                onChange={handleChange}
                placeholder='Enter the category name'
              />
              <TextInput
                label='Description'
                name='description'
                value={selectedCategory.description}
                onChange={handleChange}
                placeholder='Describe the category'
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

export default EditCategoryPage;
