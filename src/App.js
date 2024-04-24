import { useEffect, useState } from "react"

export default function Stopwatch() {
const [timer,setTimer] = useState(false)
const [counter,setCounter] = useState(0)


  useEffect(() => {
    let timerId
    if(timer){
      timerId = setInterval(() => {
        console.log('count'), 1000
        setCounter(counter => counter + 1)
      },1000)
    }
     else{
      setTimer(false)
     }
     return () =>  clearInterval(timerId)
    },[timer])
    
    const handleStartTimerClick = () => {
      setTimer(true)
    }
    const handleStopTimerClick = () => {
      setTimer(false)
    }
    
    return (
      <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {counter}s</div>
      <div className='flex justify-between'>
        <button onClick={handleStopTimerClick} className='text-amber-500 font-bold'>Durdur</button>
        <button onClick={handleStartTimerClick} className='text-green-500 font-bold'>Başlat</button>
      </div>
    </div>
  )
}

// if(timer){
//  timerId = setInterval(() => console.log('count'), 1000)
//  setCounter(counter => counter + 1)
// }