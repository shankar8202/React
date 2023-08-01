// ValueContext.js
import React from 'react';

const ValueContext = React.createContext();

export const ValueProvider = ({ children }) => {           //isme sirf create kiye state jo prvider k through bhejengy
  const [value, setValue] = React.useState('');

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}  yes
    </ValueContext.Provider>
  );
};

export default ValueContext;
