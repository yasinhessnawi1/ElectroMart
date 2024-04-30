import React, { createContext, useState } from 'react';

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    username: '',
    role: 'guest' // Default role
  });

  // Function to login a user
  const loginUser = (username, role) => {
    setUser({ isLoggedIn: true, username, role });
  };

  // Function to logout a user
  const logoutUser = () => {
    setUser({ isLoggedIn: false, username: '', role: 'guest' });
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
