import { createContext, useState, useEffect } from 'react';
import { fetchUser } from '../hooks/api';

export const UserContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    username: '',
    role: 'guest',
  });

  // Initialize user from localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');
    const first_name = localStorage.getItem('first_name');
    const last_name = localStorage.getItem('last_name');
    const address = localStorage.getItem('address');
    const id = localStorage.getItem('id');
    const mobile = localStorage.getItem('mobile');

    if (token && username && role) {
      setUser({
        isLoggedIn: true,
        username,
        role,
        email,
        first_name,
        last_name,
        address,
        id,
        mobile,
      });
    }
  }, []);

  // Function to login a user
  const loginUser = async (username, token) => {
    localStorage.setItem('token', token); // Assuming token is passed for API calls
    localStorage.setItem('username', username);

    try {
      let data = await fetchUser(username);
      if (data) {
        setUser({
          isLoggedIn: true,
          username,
          role: data.role,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          mobile: data.mobile,
          id: data.ID,
        });
        localStorage.setItem('role', data.role);
        localStorage.setItem('email', data.email);
        localStorage.setItem('first_name', data.first_name);
        localStorage.setItem('last_name', data.last_name);
        localStorage.setItem('address', data.address);
        localStorage.setItem('mobile', data.mobile);
        localStorage.setItem('id', data.ID);
      } else {
        console.error('Failed to fetch user details');
      }
    } catch (error) {
      console.error('Failed to fetch user details:', error);
    }
  };

  // Function to logout a user
  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('address');
    localStorage.removeItem('mobile');
    localStorage.removeItem('id');
    setUser({ isLoggedIn: false, username: '', role: 'guest' });
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
