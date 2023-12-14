import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoExplanation, setNewTodoExplanation] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodoTitle && newTodoExplanation) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          title: newTodoTitle,
          explanation: newTodoExplanation,
          completed: false,
          isImportant: false, // New property for importance
        },
      ]);
      setNewTodoTitle("");
      setNewTodoExplanation("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleToggleImportant = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isImportant: !todo.isImportant };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todos" style={{ backgroundColor: "#f5f5f5" }}>
      <form
        onSubmit={handleAddTodo}
        className="add-form"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "#fff",
          borderRadius: "5px",
        }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
          className="todo-input"
          style={{
            border: "none",
            outline: "none",
            padding: "5px",
            fontSize: "16px",
          }}
        />
        <textarea
          placeholder="Task Explanation"
          value={newTodoExplanation}
          onChange={(event) => setNewTodoExplanation(event.target.value)}
          className="todo-explanation"
          style={{
            border: "none",
            outline: "none",
            padding: "5px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          className="add-button"
          style={{
            backgroundColor: "#5f9ea0",
            color: "#fff",
            border: "none",
            outline: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add Task
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            style={{
              backgroundColor: todo.isImportant ? "#FFD700" : "#fff", // Highlight important tasks
              padding: "10px",
              borderRadius: "5px",
              margin: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.explanation}</p>
            <label htmlFor={`${todo.id}`}> 
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              style={{ marginRight: "5px" }}
            />
            Completed
            </label>
             <label htmlFor={`important-checkbox-${todo.id}`} className="star-checkbox-label">
        <input
          type="checkbox"
          id={`important-checkbox-${todo.id}`}
          className="star-checkbox"
          checked={todo.isImportant}
          onChange={() => handleToggleImportant(todo.id)}
          style={{ marginRight: "5px" }}
        />
        Important
      </label>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={{
                marginRight: "5px",
                width:"20px",
                backgroundColor:"#0fff",
                
              }}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos; 
