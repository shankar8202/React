// InputComponent.js
import React, { useContext } from 'react';
import ValueContext from './contex1';

const InputComponent = () => {
  const { setValue } = useContext(ValueContext);                  //yha set se value bhejengy 

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h3>Input Component</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default InputComponent;
