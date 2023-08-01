import { useState } from 'react';

function RollNumberChecker() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [details, setDetails] = useState([]);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };
  
  const handleAddButtonClick = () => {
    const rollNumberInt = parseInt(rollNumber);
    // console.log(rollNumber,"rollnumb")
    const isEven = rollNumberInt % 2 === 0;
    const parity = isEven ? 'even' : 'odd';
    
    const newDetail = {
      name: name,
      rollNumber: rollNumber,
      parity: parity
    };
    
    setDetails((prevDetails) => [...prevDetails, newDetail]);
    
    setName('');
    setRollNumber('');
  };
  
  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Roll Number:
        <input type="text" value={rollNumber} onChange={handleRollNumberChange} />
      </label>
      <br />
      <button onClick={handleAddButtonClick}>Add</button>
      <br />
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            Name: {detail.name}, Roll Number: {detail.rollNumber}, Roll Number is {detail.parity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RollNumberChecker;
