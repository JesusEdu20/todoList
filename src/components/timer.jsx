import "./timer.css"
import { useEffect, useState } from "react"

export function Timer({timeBlocks}){
    
    const [time, setTime] = useState({minutes:0, seconds:0})
    const [isPaused, setIsPaused] = useState(false)
    const [timeBlockPosition, setTimeBlockPosition] = useState(0)
    const [isPlay, setPlay] = useState(false);
    //paused //displayed //
    
    //update time
    useEffect(() => {
        console.log("new effect")
        const intervalId = setTimeout(startTimer, 1000)
        return () => clearInterval(intervalId);
    }, [isPaused, time, isPlay])

    
   function startTimer() {

        const deadLine = timeBlocks[timeBlockPosition] === undefined ? 0 : parseInt(timeBlocks[timeBlockPosition].minutes)
        

        //timer desplegado
        if (isPlay && !isPaused) {
           
            setTime(prevTime => {
                const newCount = prevTime.minutes * 60 + prevTime.seconds + 1;
                return {
                    minutes: Math.floor(newCount / 60),
                    seconds: newCount % 60
                };
            });
            
            if(time.minutes === deadLine) {
                setPlay(false) 
                setTime({minutes:0, seconds:0})
            }
        }
    
        //Ejecutar siguiente bloque de tiempo
        else if(!setPlay && timeBlocks[timeBlockPosition + 1]){
            setTimeBlockPosition(prev => prev + 1);
            console.log("next")
           
        }
}

    function pauseTimerHandler(){ 
        const block = timeBlocks[timeBlockPosition];
        if(block && isPlay){
            setIsPaused(true); console.log("paused")
         } 
    }

   
    function playTimerHandler(){
        const block = timeBlocks[timeBlockPosition];
        const status = time.minutes; 
        const reseted = 0;

         if(block && status === reseted && !isPlay){
            setPlay(true)
            console.log("played")
         } 

         if(block && isPaused){
            setIsPaused(false)
         }
    }

    return(

        <div className="timer-container">
            <div>
                <div className="btn-control-timer-container" onClick={()=>{
                    pauseTimerHandler()
                }}>
                    <button className="btn-timer__play">
                    <span className="material-symbols-outlined" >pause_circle</span>
                    </button> 
                </div>     

                <div className="btn-control-timer-container"  onClick={playTimerHandler}>
                    <button className="btn-timer__pause">
                    <span className="material-symbols-outlined">play_circle</span>
                    </button>
                </div>    
            </div>   

                <div className="time">  
                    <span className="date">
                    {`${time.minutes.toString().padStart(2, 0)}:${time.seconds.toString().padStart(2, 0)}`}
                    </span>
                </div>   
        </div>
    )
}



