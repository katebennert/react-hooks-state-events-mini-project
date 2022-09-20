import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [details, setDetails] = useState("");
  const [newCategory, setNewCategory] = useState("Code");
  const [tasks, setTasks] = useState(TASKS);

  function onCategorySelect(category) {
    setSelectedCategory(category);
  }

  function onDetailChange(det) {
    setDetails(det);
  }

  function onCategoryChange(newCat){
    setNewCategory(newCat);
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function onDeleteTask(text) {
    setTasks(tasks.filter(task => task.text !== text));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategorySelect={onCategorySelect} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} details={details} onDetailChange={onDetailChange} newCategory={newCategory} onCategoryChange={onCategoryChange} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
