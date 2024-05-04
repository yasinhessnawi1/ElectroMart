import { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSpinner, FaUser } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';
import { updateUser } from '../hooks/api';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #000000 55%, #324a21 100%);
  // Using your primary color palette
`;

const Card = styled.div`
  position: relative;
  width: 90%;
  max-width: 500px;
  padding: 2rem;
  background: linear-gradient(to right, #324a21, #000000);
  border-radius: 15px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

const Title = styled.h2`
  color: #f6f0f0;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  width: calc(100% - 2rem);
  border: 2px solid #ccc;
  border-radius: 8px;
  &:focus {
    border-color: #007bff; // Highlight color on focus
    outline: none;
  }
`;

const Icon = styled.span`
  position: inherit;
  top: 50%;
  transform: translateY(-50%) translateX(10px);
  color: white;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Spinner = styled(FaSpinner)`
  animation: ${fadeIn} 2s linear infinite;
`;
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const UserInfo = styled.div`
  text-align: center;
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
`;

const UserData = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;

  strong {
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const EditButton = styled(Button)`
  margin-top: 1rem;
`;

const GoBackButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  color: #fdfcfc;
  border: none;
  padding: 12px;
  border-radius: 0;
  font-size: 1rem;
`;

function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    address: user.address,
    password: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        address: user.address,
        password: '',
      });
    }
  }, [user]);

  const handleGoBack = () => navigate(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await updateUser(user.id, formData);
      if (response.ok) {
        alert('Profile updated successfully');
        setEditMode(false);
        setLoading(false);
      } else {
        setErrorMessage('Failed to update profile, please check your input');
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage('Network error, unable to update profile');
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <Card>
          <GoBackButton onClick={handleGoBack}>
            <FaArrowLeft />
          </GoBackButton>
          <Title>{editMode ? 'Edit Profile' : 'Your Profile'}</Title>
          {editMode ? (
            <LoginForm onSubmit={handleSubmit}>
              {' '}
              {Object.entries(formData).map(([key, value]) => (
                <InputGroup key={key}>
                  {' '}
                  <Icon>
                    {' '}
                    <FaUser />{' '}
                  </Icon>{' '}
                  <Input
                    name={key}
                    type={key === 'password' ? 'password' : 'text'}
                    placeholder={
                      key === 'password'
                        ? 'New Password (leave empty if no change)'
                        : key
                    }
                    value={value}
                    onChange={handleChange}
                    required={key !== 'address' && key !== 'password'}
                  />{' '}
                </InputGroup>
              ))}{' '}
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{' '}
              <Button type='submit'>
                {' '}
                {loading ? <Spinner /> : 'Save Changes'}{' '}
              </Button>{' '}
            </LoginForm>
          ) : (
            <UserInfo>
              {' '}
              <UserData>
                {' '}
                <strong>Username:</strong> {formData.username}{' '}
              </UserData>{' '}
              <UserData>
                {' '}
                <strong>Email:</strong> {formData.email}{' '}
              </UserData>{' '}
              <UserData>
                {' '}
                <strong>First Name:</strong> {formData.first_name}{' '}
              </UserData>{' '}
              <UserData>
                {' '}
                <strong>Last Name:</strong> {formData.last_name}{' '}
              </UserData>{' '}
              <UserData>
                {' '}
                <strong>Address:</strong> {formData.address}{' '}
              </UserData>{' '}
              <EditButton onClick={() => setEditMode(true)}>
                {' '}
                Edit Profile{' '}
              </EditButton>{' '}
            </UserInfo>
          )}
        </Card>
      </LoginContainer>
      <Footer />
    </>
  );
}

export default ProfilePage;
