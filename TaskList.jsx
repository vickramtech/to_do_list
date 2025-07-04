import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onUpdate={onUpdate} 
        />
      ))}
    </div>
  );
}
