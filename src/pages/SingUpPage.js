import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaHome, FaSpinner } from 'react-icons/fa';
import { addUser } from '../hooks/api';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #000000 55%, #324a21 100%);
`;

const Card = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  text-align: center;
  font-family: Geneva, sans-serif;
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
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  font-size: 1rem;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 5px;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #aaa;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Spinner = styled(FaSpinner)`
  animation: ${rotate} 2s linear infinite;
`;

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    address: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      const response = await addUser(formData);
      if (response.status === 201) {
        setLoading(false);
        navigate('/login'); // Redirect to home on success
        alert('User created successfully, login to continue');
      } else {
        setErrorMessage(
          'Failed to create user, check your input and try again',
        );
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage('Failed to create user, check your input and try again');
      setLoading(false);
      console.log('Error creating user:', error);
    }
  };

  return (
    <LoginContainer>
      <Card>
        <Title>Sign Up</Title>
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <Icon>
              <FaUser />
            </Icon>
            <Input
              name='username'
              type='text'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon>
              <FaLock />
            </Icon>
            <Input
              name='password'
              type='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon>
              <FaEnvelope />
            </Icon>
            <Input
              name='email'
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon>
              <FaUser />
            </Icon>
            <Input
              name='first_name'
              type='text'
              placeholder='First Name'
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon>
              <FaUser />
            </Icon>
            <Input
              name='last_name'
              type='text'
              placeholder='Last Name'
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon>
              <FaHome />
            </Icon>
            <Input
              name='address'
              type='text'
              placeholder='Address'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </InputGroup>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <SubmitButton type='submit'>
            {loading ? <Spinner /> : 'Sign Up'}
          </SubmitButton>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
}

export default SignUpPage;
