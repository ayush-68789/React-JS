// const App = () => {3
//   let a = 20 ; 
//   const change = () => {
//     console.log(a);
//     a = 30 ; 
//     console.log(a);
//   }
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={change}>Click to change</button>
//     </div>
//   )
// }
// Now using useState hook as h1 was not changing after prewssing the buytton 

import { useState } from "react";
import Counter from "./components/Counter";


const App = () => {
  const [a , setA] = useState(20) ; 
  const [user, setUser] = useState('Ayush') ; 
  const [names, setNames] = useState(['naman', 'chaman', 'ritik']) ;

  const changeUser = ()=> {
    setUser('Khushi') ;
    setNames(['A', 'B', 'C']) ;
  }
  const change = ()=>{
    setA(50) ; 
  }
   return (
    <div>
      <h1>Current User : {user}</h1>
      {names.map((elem, idx)=>{
        return <h4>{idx+1} : {elem}</h4>
      })}
      <h5>Value of a is {a}</h5>
      <button onClick={changeUser}>Change User and names</button> <br />
      <button onClick={change}>Change value of a</button>
      <Counter/>
    </div>
  )
}
export default App ;