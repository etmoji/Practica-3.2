import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TaskList;
