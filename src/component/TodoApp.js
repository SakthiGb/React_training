import React, { useState, useCallback, useMemo } from "react";
import "./TodoApp.css";
import { Button, ListGroup } from "react-bootstrap";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    text: "",
    isEditing: false,
    id: null,
  });

  const addTodo = useCallback(() => {
    if (currentTodo.text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: currentTodo.text }]);
      setCurrentTodo({ text: "", isEditing: false, id: null });
    }
  }, [currentTodo, todos]);

  const deleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const startEditing = useCallback((todo) => {
    setCurrentTodo({ text: todo.text, isEditing: true, id: todo.id });
  }, []);

  const editTodo = useCallback(() => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: currentTodo.text } : todo
      )
    );
    setCurrentTodo({ text: "", isEditing: false, id: null });
  }, [currentTodo, todos]);

  const handleChange = useCallback(
    (e) => {
      setCurrentTodo({ ...currentTodo, text: e.target.value });
    },
    [currentTodo]
  );

  const todoList = useMemo(() => {
    return todos.map((todo) => (
      <li key={todo.id} className="todo-item">
        <span>{todo.text}</span>
        <Button onClick={() => startEditing(todo)} variant="info">
          Edit
        </Button>
        <Button onClick={() => deleteTodo(todo.id)} variant="danger">
          Delete
        </Button>
      </li>
    ));
  }, [todos, deleteTodo, startEditing]);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={currentTodo.text}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        {currentTodo.isEditing ? (
          <Button onClick={editTodo} variant="warning">
            Update
          </Button>
        ) : (
          <Button onClick={addTodo}>Add</Button>
        )}
      </div>
      {todos.length ? (
        <ListGroup>
          <ListGroup.Item>{todoList}</ListGroup.Item>
        </ListGroup>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoApp;
