import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {

  const renderAllTasks = tasks.map(task => <Task key={uuid()} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>)
  const renderFilteredTasks = renderAllTasks.filter(task => task.props.category === selectedCategory);

  return (
    <div className="tasks">
      {selectedCategory === "All" ? renderAllTasks : renderFilteredTasks} 
    </div>
  );
}

export default TaskList;
