import React from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, details, onDetailChange, newCategory, onCategoryChange, onTaskFormSubmit }) {

  const categoryOptions = categories.filter(category => category !== "All");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {text: details, category: newCategory};
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e) => onDetailChange(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={(e) => onCategoryChange(e.target.value)}> 
          {categoryOptions.map(category => <option key={uuid()}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
