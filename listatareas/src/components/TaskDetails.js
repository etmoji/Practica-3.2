import React from 'react';

const TaskDetails = ({ task, goBack }) => {
  return (
    <div>
      <h2>Detalles de la Tarea</h2>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={goBack}>Volver a la Lista</button>
    </div>
  );
};

export default TaskDetails;
