import React, { useState, useEffect } from 'react';
import './TaskForm.css'; // Importa el archivo CSS

const TaskForm = ({ addTask, goBack, initialTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title || '');
      setDescription(initialTask.description || '');
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      if (initialTask) {
        // Si hay una tarea inicial, se trata de una edición
        addTask({ ...initialTask, title, description });
      } else {
        // Si no hay tarea inicial, se trata de una adición de nueva tarea
        addTask({ title, description });
      }
      setTitle('');
      setDescription('');
      goBack();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título de la tarea" 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descripción de la tarea" 
      />
      <button type="submit">{initialTask ? 'Guardar' : 'Agregar'}</button>
    </form>
  );
};

export default TaskForm;
