// App.js
import React from 'react';
import { ValueProvider } from './contex1';
import InputComponent from './context2';
import PrintComponent from './context3';

const ContextMain = () => {
  return (
    <ValueProvider>
      <div>
        <h2>Value Example</h2>
        <InputComponent />
        <PrintComponent />
      </div>
    </ValueProvider>
  );
};

export default ContextMain;
