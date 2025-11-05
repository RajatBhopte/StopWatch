import { use, useEffect , useState } from "react";
import './styles/Stopwatch.css'

export default function Stopwatch() {

    const[time , setTime] = useState(0)

    const[IsRunning , setRunning] = useState(false)


     useEffect(()=>
        {
         let interval;
         if (IsRunning) 
        {
           interval = setInterval(() => {
             setTime((prevtime) => prevtime + 1);
           }, 1000);
         }


       return () => clearInterval(interval);

     } , [IsRunning]);

    const handelStart = ()=>setRunning(true)
    const handelStop = ()=>setRunning(false)
    const handelReset = ()=>{
        setTime(0)
        setRunning(false)
    }

     function formateTime(time){
        const hours = Math.floor(time/3600)
        const minutes = Math.floor((time%3600)/60)
        const seconds = time % 60

        return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`


     }


    return (
      <div className="container">
        <h1>StopWatch</h1>
        <br></br>
        <h3 className="Timer">{formateTime(time)}</h3>
        <div className ="buttons">
          <button onClick={handelStart} disabled={IsRunning}>
            Start
          </button>
          <button onClick={handelReset}>Reset</button>
          <button onClick={handelStop} disabled={!IsRunning}>
            Stop
          </button>
        </div>
      </div>
    );

  



   


   

}