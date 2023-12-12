import React, { Fragment } from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({ tasks , onCompleteTask, onDeleteTask }) => {
  return (
    <Fragment>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </Fragment>
  )
}

export default TaskList;