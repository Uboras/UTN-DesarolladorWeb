import React, { Fragment } from 'react';
import '../Styles/TaskItem.css';


export const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <div className='contenedor-taskItem'>
      <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }} >
        <p className='contenedor-taskItem_titulo'>{task.name}</p>
      </div>
      <div className='contenedor-taskItem_conteinerButton'>
        <button className='contenedor-taskItem_conteinerButton-buttons' onClick={() => onCompleteTask(task.id)}>✅</button>
        <button className='contenedor-taskItem_conteinerButton-buttons' onClick={() => onDeleteTask(task.id)}>⛔</button>
      </div>
    </div>
  );
};

export default TaskItem;