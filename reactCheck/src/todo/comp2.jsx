import React from "react";

const ListTodo = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo)}
          />
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListTodo;
