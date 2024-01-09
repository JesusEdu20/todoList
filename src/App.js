
import { ToDoList } from "./components/ToDoList.jsx";
import { Task } from "./components/task.jsx";
import { AddTaskInput } from "./components/addTaskInput.jsx"
import { Timer } from "./components/timer.jsx";
import { EstatePanel } from "./components/greetings.jsx";
import { TimeBlockBar } from "./components/timeBlockBar.jsx";
import { BlockTime } from "./components/blockTime.jsx";
import { CompletedTasksList } from "./components/completedTasksList.jsx";
import { useState } from "react";
import "./App.css"

function App() {

  const [tasks, setTask] = useState([]) 
  const [completedTasks, setCompletedTask] = useState([])

  const [timeBlock, setTimeBlock] = useState([])
  const [time, setTime] = useState(25)

  //Completar tarea
  function handleCompleteTask(id){
    const task = tasks.find( task => task.id === parseInt(id) )
    setCompletedTask(prevTasks => [...prevTasks, task])
    handleRemoveTask(id)
  }
  //Eliminar tarea
  function handleRemoveTask(id){
   const newTasks = tasks.filter( task => task.id!== parseInt(id))
   
   setTask(newTasks)
  }
  //Agregar tarea
  function handleSetTask(textInput){
    let newTask = {
      id: tasks.length + Date.now(),
      content: textInput.value, 
     } 
     setTask( prevTasks => [...prevTasks, newTask] )
     textInput.value = ""
  }

  //Agregar bloque de tiempo
  function handleSetTimeBlock(){
        if(time <= 25 && timeBlock.length < 4){
            const newTimeBlock = {
                id: timeBlock.length + 1,
                minutes: time
            }
            setTimeBlock([...timeBlock, newTimeBlock])
        }    
    }

  //Eliminar bloque de tiempo
  function handleRemoveTimeBlock(){
        const id = timeBlock[timeBlock.length-1].id
        const blocks = timeBlock.filter(block => block.id!==id)
        setTimeBlock(blocks)
  }

  //Configurar bloque de tiempo
  function handleConfigTime(time){
    setTime(time)
  }


  return (
      <div className="App">
        <div className="todo-container">
          <AddTaskInput handleTask={handleSetTask}></AddTaskInput>
          <ToDoList>
            {tasks.map( task =>{
              return <Task key={task.id} id={task.id} text={task.content} handleRemoveTask={handleRemoveTask}  handleCompleteTask={handleCompleteTask}></Task>
            })}
          </ToDoList>
          <Timer timeBlocks={timeBlock}/>
        </div>

        <div className="config-panel">
          <EstatePanel></EstatePanel>
          <TimeBlockBar handleSetTimeBlock={handleSetTimeBlock} handleRemoveTimeBlock={handleRemoveTimeBlock} handleConfigTime={handleConfigTime} placeholder={time}>
          {timeBlock.map( block => <BlockTime time={block.minutes} key={block.id}></BlockTime> ) } 
          </TimeBlockBar>

          <CompletedTasksList>
            { completedTasks.map ( task => <Task key={task.id} id={task.id} text={task.content}></Task>) }
          </CompletedTasksList>
        </div>
      </div>
  );
}

export default App;
