import React, { useState, useEffect } from 'react';

function EditCard({ task, onSave, onCancel }) {
    const [editTask, setEditedTask] = useState(task);

    return (
        <div className="card-body d-flex gap-2">
            <input type="text" className="form-control" 
                    value={editTask} contentEditable='true'
                    onChange={(e) => {setEditedTask(e.target.value)}}/>

            <button type="button" className="btn btn-primary" onClick={() => onSave(editTask)}>
                Save
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
                Cancel
            </button>
        </div>
        )
    }

function ToDoList() {

    const [task, setTask ] = useState('')
    const [taskList, setTaskList] = useState([])
    const [editingIndex, setEditingIndex] = useState(null)
    const [checkedTask, setCheckedTask] = useState(false)

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
        setEditingIndex(index);    
    }

    function saveEditedTask (index, updatedTask) {
        setTaskList (
            taskList.map((task, taskIndex) => 
                taskIndex === index ? updatedTask : task
            )
        )

        setEditingIndex(null)
    }


  return (
    <>
        <div className="container mt-5">

            <div className="input-group">
                {/* <div>Your To-Do</div>  */}
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
                    <li key={index} className="list-group-item d-flex gap-1">
                        {editingIndex === index ? (
                            <EditCard 
                                task={task}
                                onSave={(updatedTask) => 
                                    saveEditedTask(index, updatedTask)
                                }
                                onCancel={() => setEditingIndex(null)}
                            />
                        ) : (
                            <>
                                <input className="form-check-input me-1" type="checkbox" value="" id="checkbox " onChange={(e) => setCheckedTask(e.target.checked)}/>
                                { checkedTask ? <del>{task}</del> : task}
                                
                                <button type="button" className="btn btn-outline-info ms-auto"
                                    onClick={() => {editTask(index)}}>
                                    Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger ms-2" 
                                    onClick={(e) => {deleteTask(index)}}>
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}

            </ul>
        </div>
    </>
  );
}

export default ToDoList;
