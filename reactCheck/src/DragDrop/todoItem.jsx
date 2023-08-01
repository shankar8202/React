import  { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';  
// library =>  npm install react-dnd react-dnd-html5-backend  and    npm i react-beautiful-dnd
const initialTodos = [
  { id: 'todo1', text: 'Learn React' },
  { id: 'todo2', text: 'Build a todo app' },
  { id: 'todo3', text: 'Add drag and drop functionality' },
  { id: 'todo4', text: 'Celebrate your success!' },
];

const DragDrop = () => {
  const [todos, setTodos] = useState(initialTodos);

  const onDragEnd = (result) => {
    console.log(result,"result")
    if (!result.destination) return;

    const newTodos = Array.from(todos);
    console.log(newTodos,"newone")
    const [reorderedTodo] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, reorderedTodo);

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Todo with Drag and Drop</h1>
      </header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todoList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="TodoItem"
                    >
                      {todo.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
