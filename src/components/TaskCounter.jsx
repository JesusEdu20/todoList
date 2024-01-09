import "./TaskCounter.css"

export function TaskCounter({tasks, completed}){
    
    return (
        <h2 className="task-counter">Completed {completed} of {tasks}</h2>
    )
}

