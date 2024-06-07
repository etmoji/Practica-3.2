import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const selectTask = (index) => {
    setSelectedTask(tasks[index]);
  };

  const goBackToList = () => {
    setSelectedTask(null);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {selectedTask ? (
        <TaskDetails task={selectedTask} goBack={goBackToList} />
      ) : (
        <TaskList tasks={tasks} removeTask={removeTask} selectTask={selectTask} />
      )}
      <h2>Agregar Tarea</h2>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default App;
