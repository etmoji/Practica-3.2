import React, { useState } from 'react';
import FloatingButton from './FloatingButton';

const TaskDetails = ({ task, goBack, removeTask, updateTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTask(editedTask);
    setEditing(false);
  };

  const handleRemove = () => {
    removeTask();
    goBack();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div className="task-details-container">
      <div className="task-details-header">
        <h2>Detalles de la Tarea</h2>
        {!editing ? (
          <FloatingButton onClick={handleEdit} type="edit" color="#50577A" position={{ right: '70%', bottom: '10%' }}>
        <i className="fas fa-pencil-alt"></i>
        </FloatingButton>
        ) : (
          <FloatingButton onClick={handleSave} type="save" color="#50577A" position={{ right: '70%', bottom: '10%' }}>
        <i className="fas fa-check"></i>
        </FloatingButton>
        )}
        <FloatingButton onClick={handleRemove} type="delete" color="#ff0000" position={{ right: '75%', bottom: '10%' }}>
        <i className="fas fa-trash-alt"></i>
        </FloatingButton>
        <FloatingButton onClick={goBack} type="back" color="#F3EFE0" position={{ right: '65%', bottom: '10%' }}>
        <i className="fas fa-arrow-left" style={{ color: 'black' }}></i>
        </FloatingButton>
      </div>
      <div className="task-details-content">
        {!editing ? (
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ) : (
          <div>
            <input type="text" name="title" value={editedTask.title} onChange={handleChange} />
            <textarea name="description" value={editedTask.description} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetails;
