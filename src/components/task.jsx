import "./task.css"

export function Task({id, text, handleRemoveTask, handleCompleteTask}){
    
    return(
        <li className="task">
            <span className="material-symbols-outlined  task-quit" onClick={ (e) => {
                handleRemoveTask(e.target.id)
            }} id={id}> close </span>
            <p>{text}</p>
            <span id={id} className="material-symbols-outlined  task-check" onClick={ (e)=>{
                handleCompleteTask(e.target.id)
            }}> done </span>
        </li>
    )
}


