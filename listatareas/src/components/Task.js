import React from 'react';

const Task = ({ task, index, removeTask, selectTask }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <button onClick={() => selectTask(index)}>Ver Detalles</button>
    </li>
  );
};

export default Task;
