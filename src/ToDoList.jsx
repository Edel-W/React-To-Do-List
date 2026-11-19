import React, { useState } from 'react';

function ToDoList() {

    const [task, setTask ] = useState('')
    const [taskList, setTaskList] = useState([])

    function addNewTask () {
        if (task.trim() === '') return;

        setTaskList([...taskList, task]);
        setTask('');   
     }

    function deleteTask (index) {
        setTaskList(
            taskList.filter((task, taskIndex) => taskIndex !== index)
        );     
    }

    function editTask (index) {

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
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" key={task.index}/>
                        {task}
                        <button type="button" className="btn btn-outline-info ms-auto"
                            onClick={(e) => {editTask(index)}}>
                            Edit
                        </button>
                        <button type="button" className="btn btn-outline-danger ms-2" 
                            onClick={(e) => {deleteTask(index)}}>
                            Delete
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    </>
  );
}

export default ToDoList;
