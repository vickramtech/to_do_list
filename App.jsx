import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  const [view, setView] = useState('add');
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    setTasks([...tasks, { id: Date.now(), title, description }]);
  };

  const updateTask = (id, updated) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updated } : task));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <nav>
        <span onClick={() => setView('add')}>Add Task</span>
        <span onClick={() => setView('view')}>View Tasks</span>
      </nav>

      {view === 'add' && <TaskForm onAdd={addTask} />}
      {view === 'view' && (
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      )}
    </div>
  );
}
