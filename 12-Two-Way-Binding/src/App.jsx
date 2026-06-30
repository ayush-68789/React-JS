import { useState } from "react";

const App = () => {

  const[name , setName] = useState('') ; 

  const submitHandler = (elem) => {
    elem.preventDefault() ; 
    console.log('Form Submitted') ;
    console.log(`Name is : ${name}`) ; 
    setName('') ;
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem) ; 
      }}>
        <input type="text" placeholder="Enter your name" onChange={(elem)=>{
          console.log(elem.target.value) ; 
          setName(elem.target.value) ; 
        }}
        value={name}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App ;