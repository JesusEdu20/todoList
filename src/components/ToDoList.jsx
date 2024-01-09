import "./ToDoList.css"


export function ToDoList (props){
    return(
            <div className="todo-list-container">
                <ul>
                    {props.children}
                </ul>
            </div>
        
    )
}