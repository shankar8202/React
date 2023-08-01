import  { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit() {
    if (editIndex === -1) {
      setTasks([...tasks, input]);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      // console.log(updatedTasks[editIndex],"this")
      setTasks(updatedTasks);
      setEditIndex(-1);
    }
    setInput('');
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setInput(tasks[index]);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>{editIndex === -1 ? 'Add todo' : 'Update todo'}</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => handleDelete(index)}>delete</button>
            <button onClick={() => handleEdit(index)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
