// src/components/TaskForm.js
import React, { useState } from 'react';
import '../Styles/TaskForm.css'

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      return
    };
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <div className='contenedor-taskForm'>
      <input className='contenedor-taskForm_input' type="text" id='tarea' value={taskName} onChange={handleInputChange} placeholder='Agregar nueva tarea' />
      <button className='contenedor-taskForm_crear' onClick={handleAddTask}>+</button>
    </div>
  );
};

export default TaskForm;
