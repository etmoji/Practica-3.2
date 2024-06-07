import React from 'react';

const TaskList = ({ tasks, selectTask, markTaskCompleted }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => markTaskCompleted(index)} 
          />
          <span 
            onClick={() => selectTask(index)} 
            style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
