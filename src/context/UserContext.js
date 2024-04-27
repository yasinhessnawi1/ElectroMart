import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  user: { isLoggedIn: false, role: 'guest' }, // Default values
  setUser: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false, role: 'guest' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
