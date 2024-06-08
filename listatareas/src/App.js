import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';
import FloatingButton from './components/FloatingButton';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks || [];
  });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
    setShowForm(false);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setSelectedTask(null);
  };

  const markTaskCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? updatedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const selectTask = (index) => {
    setSelectedTask(tasks[index]);
    setShowForm(false);
  };

  const goBackToList = () => {
    setSelectedTask(null);
  };

  const handleFloatingButtonClick = () => {
    setSelectedTask(null);
    setShowForm(!showForm);
    console.log('showForm', showForm);
  };

  return (
    <div className="app-container">
      <div className="task-list-container">
        <h2>Lista de Tareas</h2>
        <TaskList
          tasks={tasks}
          selectTask={selectTask}
          markTaskCompleted={markTaskCompleted}
        />
      </div>
      <div className="task-details-container">
        {showForm ? (
          <div>
            <h2>Agregar Tarea</h2>
            <TaskForm addTask={addTask} goBack={goBackToList}/>
          </div>
        ) : selectedTask ? (
          <TaskDetails
            task={selectedTask}
            goBack={goBackToList}
            removeTask={() => removeTask(tasks.indexOf(selectedTask))}
            updateTask={updateTask}
          />
        ) : (
          <div className="no-task-selected">
            <img src="postit.png" alt="postit" />
          </div>
        )}
      </div>
      <FloatingButton
        onClick={handleFloatingButtonClick}
        type="add"
        color="#61677A"
        position={{ right: '5%', bottom: '10%' }}
      >
        <i className="fas fa-sticky-note"></i>
      </FloatingButton>
      <div>
        {showForm ? (
          <FloatingButton
            onClick={handleFloatingButtonClick}
            type="back"
            color="#50577A"
            position={{ right: '75%', bottom: '10%' }}
          >
            <i className="fas fa-arrow-left"></i>
          </FloatingButton>
        ) : null}
      </div>
    </div>
  );
};

export default App;
