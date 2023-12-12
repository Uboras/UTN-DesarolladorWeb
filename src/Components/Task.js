import React, { useState, useEffect } from "react";
import "../Styles/Task.css";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Tasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const addTask = (taskName) => {
    const newTask = {
      id: new Date().getTime(),
      name: taskName.toUpperCase(),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="contenedor-task">
      <h1 className="contenedor-task_titulo">Lista de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default Tasks;
