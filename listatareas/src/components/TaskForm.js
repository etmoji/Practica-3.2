import React, { useState } from 'react';
import './TaskForm.css'; // Importa el archivo CSS

const TaskForm = ({ addTask, goBack }) => { // Agrega goBack como una prop
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTask({ title, description });
      setTitle('');
      setDescription('');
      goBack(); // Llama a goBack
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
      <button type="submit">Agregar</button>
    </form>
    
  );
};

export default TaskForm;
