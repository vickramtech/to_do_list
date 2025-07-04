import React, { useState } from 'react';

export default function TaskItem({ task, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleSave = () => {
    onUpdate(task.id, { title: newTitle, description: newDesc });
    setEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(task.title);
    setNewDesc(task.description);
    setEditing(false);
  };

  return (
    <div className="task-card">
      {editing ? (
        <div className="edit-mode">
          <input 
            value={newTitle} 
            onChange={e => setNewTitle(e.target.value)} 
          />
          <input 
            value={newDesc} 
            onChange={e => setNewDesc(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel} className="cancel">Cancel</button>
        </div>
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <div className="btn-group">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
