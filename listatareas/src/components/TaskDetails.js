import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm'; // Importa el componente TaskForm
import FloatingButton from './FloatingButton';

const TaskDetails = ({ task, goBack, removeTask, updateTask }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setEditing(false); // Desactiva el modo de edición cuando cambia la tarea
  }, [task]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleNoEdit = () => {
    setEditing(false);
  }

  const handleRemove = () => {
    removeTask();
    goBack();
  };

  return (
    <div className="task-details-container">
      <div className="task-details-header">
        <h2>Detalles de la Tarea</h2>
        {!editing ? (
          <div>
            <FloatingButton onClick={handleEdit} type="edit" color="#50577A" position={{ right: '70%', bottom: '10%' }}>
            <i className="fas fa-pencil-alt"></i>
          </FloatingButton>
          <FloatingButton onClick={goBack} type="back" color="#50577A" position={{ right: '65%', bottom: '10%' }}>
            <i className="fas fa-arrow-left"></i>
          </FloatingButton>
          </div>
        ) : (
          <FloatingButton onClick={handleNoEdit} type="back" color="#50577A" position={{ right: '70%', bottom: '10%' }}>
            <i className="fas fa-arrow-left"></i>
          </FloatingButton>
        )}
        <FloatingButton onClick={handleRemove} type="delete" color="#ff0000" position={{ right: '75%', bottom: '10%' }}>
          <i className="fas fa-trash-alt"></i>
        </FloatingButton>
      </div>
      <div className="task-details-content">
        {editing ? (
          <TaskForm 
            addTask={updateTask}
            goBack={goBack} 
            initialTask={task}
          />
        ) : (
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetails;
