import { useState } from "react";
import "./toggleList.css";

export function ToggleList({options, children}){
    
    const [isOptionsDisplay, setOptionDisplay] = useState(false)

    function toggleListHandler(){
        setOptionDisplay(!isOptionsDisplay);
    }
   
    return(
        <>  <span onClick={toggleListHandler} className="clear-list-btn material-symbols-outlined"> more_vert </span>
            <ul className="complete-tasks-list__options" style={{display: isOptionsDisplay? "block" : "none"}}>
            {options? options: children}
            </ul>
        </>
        
    )
}