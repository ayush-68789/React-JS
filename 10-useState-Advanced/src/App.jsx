import { useState } from "react"

const App = () => {
  const [num , setNum] = useState(0) ;
  // Batch Update
  const change = ()=> {
    setNum(prev=>(
      prev + 50 
    ))
    setNum(prev =>(
      prev + 50 
    ))
}
  return (
    <div>
      <div className="display">{num}</div>
      <button onClick={change}>Click me to change</button>
    </div>
  )
}

export default App