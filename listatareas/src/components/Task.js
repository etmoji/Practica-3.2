import React from 'react';

const Task = ({ task, index, removeTask }) => {
  return (
    <li>
      {task}
      <button onClick={() => removeTask(index)}>Eliminar</button>
    </li>
  );
};

export default Task;
