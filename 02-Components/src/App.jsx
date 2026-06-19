import Card from './components/Card.jsx' ;
import Nav from './components/Navbar.jsx' ;

const App = () => {
  return (
    <div>
      <Nav/>
      <Card/>
      <Card/>
      {Card()}
      <Card/>
    </div>
  )
}

export default App  ;