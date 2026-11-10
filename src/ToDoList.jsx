import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Wash Car", "Buy Groceries"]);
    const [newTask, setNewTask] = useState("");

    function inputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function editTask(index) {

    }

    return (
        <>
            <div className="main">
                <h1>To-Do List</h1>
                <input
                    className='task-input'
                     type="text"
                     placeholder='Enter a task...'
                     value={newTask}
                     onChange={inputChange}/>
                <button className="add-task-btn"
                        onClick={addTask}> Add Task</button>
            </div> 

            <ul>
                {tasks.map((task, index) =>
                     <li key={index} className="task-list">
                        <span className="text">{task}</span>
                        <button 
                            className="edit-button"
                            onClick={() => editTask(index)}>
                            Edit
                        </button>
                        <button 
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                     </li>
                )}
            </ul>
        </>
    )   
}

export default ToDoList