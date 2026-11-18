import React, { useState } from 'react';

function ToDoList() {
  return (
    <div className="container mt-5">
      <div className="input-group">
        <input
          type="text"
          className="form-control" border-0 shadow-none bg-light
          placeholder="Enter new task ..."
        />
        <button type="button" className="btn btn-primary">
          Add task
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
