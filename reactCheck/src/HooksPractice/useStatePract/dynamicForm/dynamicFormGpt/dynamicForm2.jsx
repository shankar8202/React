import { useState } from "react";

function DynamicForm2() {
    const [formData, setFormData] = useState({});
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform any additional logic or submit the form data
      console.log(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Render your form fields here */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default DynamicForm2;
  