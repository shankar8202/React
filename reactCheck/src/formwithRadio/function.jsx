import  { useState } from "react";

function Function() {
  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "" // Use a single state property to manage the selected gender
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit() {
    console.log(data);
  }

  return (
    <div>
      <input type="text" name="name" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <label>Male</label>
      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={handleChange}
        checked={data.gender === "Male"}
      />
      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={handleChange}
        checked={data.gender === "Female"}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Function;
