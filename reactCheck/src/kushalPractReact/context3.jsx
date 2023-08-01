// PrintComponent.js
import React, { useContext } from 'react';
import ValueContext from './contex1';

const PrintComponent = () => {
  const { value } = useContext(ValueContext);             //yha value print krvayngy

  return (
    <div>
      <h3>Print Component</h3>
      <p>Value: {value}</p>
    </div>
  );
};

export default PrintComponent;
