import { useState, useEffect } from 'react';
import {
  PageContainers,
  Card,
  Button,
  Modal,
  Overlay,
  TextInfo,
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
import { toast } from 'react-toastify'; // Assuming you have toastify installed

const EditCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory({ ...category });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await deleteCategory(id);
        setCategories(categories.filter((category) => category.ID !== id));
        toast.success('Category deleted successfully');
        navigate('/category/edit');
      } catch (error) {
        toast.error('Failed to delete category');
      }
    }
  };

  const handleAdd = () => {
    setSelectedCategory({ name: '', description: '' });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!selectedCategory.name.trim() || !selectedCategory.description.trim()) {
      toast.error('Name and description are required');
      return;
    }
    try {
      const method = selectedCategory.ID ? updateCategory : addCategory;
      const updatedCategory = await method(selectedCategory);
      const updatedCategories = selectedCategory.ID
        ? categories.map((category) =>
            category.ID === selectedCategory.ID ? updatedCategory : category,
          )
        : [...categories, updatedCategory];
      setCategories(updatedCategories);
      setShowModal(false);
      toast.success('Category saved successfully');
      navigate('/category/edit');
    } catch (error) {
      toast.error('Failed to save category');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCategory((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      <PageContainers>
        {categories.length ? (
          categories.map((category) => (
            <Card key={category.ID}>
              <span>{category.name}</span>
              <div>
                <Button onClick={() => handleSelectCategory(category)}>
                  Edit
                </Button>
                <Button onClick={() => handleDelete(category.ID)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <TextInfo>No categories found. Please add some.</TextInfo>
        )}
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
                aria-placeholder={'Enter the category name'}
                value={selectedCategory.name}
                onChange={handleChange}
                placeholder='Enter the category name'
              />
              <TextInput
                label='Description'
                name='description'
                aria-placeholder={'Describe the category'}
                value={selectedCategory.description}
                onChange={handleChange}
                placeholder='Describe the category'
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

export default EditCategoryPage;
