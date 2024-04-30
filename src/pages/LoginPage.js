import React, { useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { fetchLogin, fetchRole } from '../hooks/api';
import { UserContext } from '../context/UserContext';
import { FaUser, FaLock, FaSpinner } from 'react-icons/fa';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
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
    background: linear-gradient(to right, #6a11cb, #2575fc);
`;

const Card = styled.div`
    width: 90%;
    max-width: 400px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    text-align: center;  // Align text in the center for better aesthetics
`;

const Title = styled.h2`
    color: #333;  // Choose a color that fits your brand
    font-size: 2.5rem;  // Makes the title larger
    font-weight: 700;  // Makes the font bolder
    margin: 0 0 2rem 0;  // Adds more space below the title
    text-align: center;
    font-family: Geneva,sans-serif; 
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
    transition: background-color 0.2s, transform 0.2s;
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

const SignUpLink = styled(Link)`
    color: #007bff;
    text-decoration: none;
    margin-top: 1rem;
    &:hover {
        text-decoration: underline;
    }
`;

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetchLogin(username, password);
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        const role = await fetchRole(data.token);
        loginUser(username, role);
        navigate('/');
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred');
    }
    setLoading(false);
  };

  return (
    <LoginContainer>
      <Card>
        <Title>Login to ElectroMart</Title>
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputGroup>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <SubmitButton type="submit">
            {loading ? <Spinner /> : 'Login'}
          </SubmitButton>
          <SignUpLink to="/signup">Not a user? Sign up here!</SignUpLink>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
}

export default LoginPage;
