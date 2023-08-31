import React, { useState, createContext } from 'react';
import useEffect from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
