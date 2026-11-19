import React, { useState } from 'react';

function ToDoList() {

    const [task, setTask ] = useState('')
    const [taskList, setTaskList] = useState([])

    function addNewTask () {
        if (task.trim() === '') return;

        setTaskList([...taskList, task]);
        setTask('');   
     }

  return (
    <>
        <div className="container mt-5">
            <div className="input-group">
                <input
                type="text"
                className="form-control  border-0 shadow-none bg-light rounded"
                placeholder="Enter new task ..."
                value= {task}
                onChange={(e) => setTask(e.target.value)}
                />
                <button type="button" className="btn btn-primary" onClick={(e) => {addNewTask()}}>
                Add task
                </button>
            </div>

            <ul className="list-group mt-5 shadow-sm gap-1">
                { taskList.map((task, index) => (
                    <li className="list-group-item d-flex gap-1">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                        {task}
                        <button type="button" className="btn btn-outline-info ms-auto">Edit</button>
                        <button type="button" className="btn btn-outline-danger ms-2">Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    </>
  );
}

export default ToDoList;
