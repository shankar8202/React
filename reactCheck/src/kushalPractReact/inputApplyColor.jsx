import  { useState } from 'react';

function ColorAdder() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleAddColor = () => {
    
      setColors([...colors, color]);
      setColor('');
    
  };

  return (
    <div>
      <input type="text" value={color} onChange={handleColorChange} />
      <button onClick={handleAddColor}>Add Color</button>

      <div>
       <ul>
       {colors.map((c, index) => (
          <li
            key={index}
            style={{
              color: c,
            }}
          >{c}</li>
        ))}
       </ul>
      </div>
    </div>
  );
}

export default ColorAdder;
