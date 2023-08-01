import  { useState } from "react";

function Dynamicform2() {
  const [form, setForm] = useState([]);
  const [field, setField] = useState({
    type: "",
    placeholder: "",
    default: "",
    label: "",
  });
  const [print, SetPrint] = useState({});
  const[isSubmit,setIsSubmit]=useState(false)

  const Change = (e) => {
    const { name, value } = e.target;
    // console.log(value,"value")
    setField((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const MakeForm = () => {
    setForm((prev) => {
      return [...prev, field];
    });
    setIsSubmit(true)
  };

  const Inner = (e) => {
    const { name, value } = e.target;
    SetPrint((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const Final = () => {
    console.log(print);
  };

  return (
    <div>
      <div>
        <select name="type" id="" onChange={Change}>
          <option value=""></option>
          <option value="text">name</option>
          <option value="password">password</option>
          <option value="email">email</option>
          <option value="number">number</option>
        </select>
        <input
          type="text"
          name="placeholder"
          placeholder="placeholder"
          onChange={Change}
        />
        <input
          type="text"
          name="default"
          placeholder="value"
          onChange={Change}
        />
        <input type="text" name="label" placeholder="label" onChange={Change} />
        <button onClick={MakeForm}>Add</button>
      </div>
      {form.map((data, i) => {
        return (
          <div key={i}>
            <div>{data.label}</div>
            <div>
              <input
                type={data.type}
                placeholder={data.placeholder}
                // value={data.default}
                name={data.type}
                onChange={Inner}
              />
            </div>
          </div>
        );
      })}
      {isSubmit ?  <button onClick={Final}>Submit</button>: "select type of input"}
    </div>
  );
}

export default Dynamicform2;
