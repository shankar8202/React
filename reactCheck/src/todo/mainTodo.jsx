import React, { useState } from "react";
import AddTodo from "./todoKushal";
import ListTodo from "./comp2";
import ShowTodo from "./comp3";

const TodoList1 = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.title === todo.title) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTodos(updatedTodos);
  };
  
  return (
    <div>
      <h2>Add Todo</h2>
      <AddTodo onAddTodo={addTodo} />
      <h2>List Todo</h2>
      <ListTodo todos={todos} onToggleTodo={toggleTodo} />
      <h2>Show Todo</h2>
      <ShowTodo todos={todos} />
    </div>
  );
}
 export default TodoList1
