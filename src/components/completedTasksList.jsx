import "./completedTasksList.css"
import { ToDoList } from "./ToDoList"

export function CompletedTasksList({children}){


    return(
        <div className="complete-tasks-list-container">
            <ToDoList>
                {children}
            </ToDoList>
        </div>
    )   
   
}