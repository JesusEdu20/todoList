import "./timeBlockBar.css"


export function TimeBlockBar({handleRemoveTimeBlock, handleSetTimeBlock, handleConfigTime, placeholder, children}){

    return(

        <div className="block-bar-container">

            <div className="block-time-config-container">
                <input type="number" className="block-bar__input" placeholder={placeholder} min="1" max="25" 
                inputMode="none" spin="true" onChange={(e)=>{ handleConfigTime(e.target.value) }}></input>

                <div className="block-bar-controls-container">
                    <span className="material-symbols-outlined block-timer__add" onClick={()=>{
                        handleSetTimeBlock()
                    }}>add</span>
                    <span className="material-symbols-outlined block-timer__remove" onClick={(e)=>{
                        handleRemoveTimeBlock()
                    }}>remove</span>
                </div>    
            </div>    

            <div className="block-bar">
               {/* {timeBlock.map( block => <BlockTime time={block.minutes} key={block.id}></BlockTime> ) } */}
               {children}
            </div>
        </div>
    )
}