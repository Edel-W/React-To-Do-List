import React, { useState } from 'react';

function ToDoList() {

    const tasks = [
        "Wash",
        "Drive",
        "Study",
        "Cry"
    ]


  return (
    <>
        <div className="container mt-5">
            <div className="input-group">
                <input
                type="text"
                className="form-control" border-0 shadow-none bg-light
                placeholder="Enter new task ..."
                />
                <button type="button" className="btn btn-primary" >
                Add task
                </button>
            </div>

            <ul className="list-group mt-5 shadow-sm gap-1">
                { tasks.map((task, index) => (
                    <li className="list-group-item d-flex gap-1">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                        {task}
                        <button type="button" class="btn btn-outline-info ms-auto">Edit</button>
                        <button type="button" className="btn btn-outline-danger ms-2">Delete</button>
                    </li>
                ))}

 {/* {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          { items.map((item, index) => (
            <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                key={index} onClick={() => setSelectedIndex(index) }>{item}</li>
          ))}
        </ul> */}

            </ul>
        </div>
    </>
  );
}

export default ToDoList;
