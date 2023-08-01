import React from "react";

const ShowTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.title}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowTodo;
