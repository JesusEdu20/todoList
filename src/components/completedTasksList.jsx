import "./completedTasksList.css"
import { ToDoList } from "./ToDoList"
import { useState } from "react"
import { ToggleList } from "./toggleList.jsx"

export function CompletedTasksList({children, clearListHandler}){

    return(
        <div className="complete-tasks-list-container">    
            <ToDoList>
                <ToggleList>
                    <li className="complete-task-list__item" onClick={clearListHandler}>Clear finished tasks</li>
                </ToggleList>
                {children}
            </ToDoList>
        </div>
    )   
   
}

