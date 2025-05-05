import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3005/api/todos';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch todos
  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title });
    setTitle('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  const startEdit = (todo) => {
    setTitle(todo.title);
    setEditId(todo.id);
    setEditMode(true);
  };

  const updateTodo = async () => {
    if (!title.trim()) return;
    await axios.put(`${API_URL}/${editId}`, { title });
    setEditMode(false);
    setEditId(null);
    setTitle('');
    fetchTodos();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow border p-2 rounded"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {editMode ? (
          <button
            onClick={updateTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        )}
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{todo.title}</span>
            <div className="space-x-2">
              <button
                onClick={() => startEdit(todo)}
                className="bg-yellow-400 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
