import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0) ;

  const inc = () => {
    setCount(count+1) ; 
  }

  const dec = () => {
    setCount(count-1) ; 
  }

  const jmp = ()=> {
    setCount(count + 5) ; 
  }

  const set0 = ()=> {
    setCount(0) ; 
  }
  return (
    <>
        <div className="display">{count}</div>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button><br />
        <button onClick={jmp}>Jump by 5</button>
        <button onClick={set0}>Set to 0</button>
    </>
  )
}

export default Counter