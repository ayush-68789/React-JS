const App = () => {

  const submitHandler = (elem) => {
    elem.preventDefault() ;  // prevents the default behavior of form ie auto submit
    console.log('Submitted') ;
  }

  return (
    <div>
      <form onSubmit={(elem)=> {
        submitHandler(elem) ; 
      }}>
        <input type="text" placeholder="Enter your name : "/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App ;