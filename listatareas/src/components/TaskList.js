import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, removeTask, selectTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} removeTask={removeTask} selectTask={selectTask} />
      ))}
    </ul>
  );
};

export default TaskList;
