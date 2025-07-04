import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && description) {
      onAdd(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={e => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description}
        onChange={e => setDescription(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}
