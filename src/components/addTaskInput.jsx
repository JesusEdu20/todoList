import { useState } from "react";
import "./addTaskInput.css"


export function AddTaskInput({placeholder, handleTask}){

    const [tasks, setTask] = useState([])
    const [textTask, setTextTask] = useState("")

    
    function handleTextTask(e){

        setTextTask(e.target)
    }

    return(
        <div className="add-task-input-container">
            <input type="text" className="add-task__input" placeholder={placeholder} onChange={(e)=>{handleTextTask(e)}}></input>
            <span className="material-symbols-outlined add-task__span"  onClick={()=>{
                handleTask(textTask); 
            }}>add_task</span>
        </div>
    )
}