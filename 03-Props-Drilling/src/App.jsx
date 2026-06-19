import Card from "./components/Card"

const App = ()=> {
  return (
    <div className="parent">
      <Card pfp = "https://pbs.twimg.com/media/FeyBl-nWIAAX5iG.jpg" user = "Anmol Saxena" age={18} desc="i am a rich guy and i am also  a nice person"/>
      <Card pfp = "https://i.pinimg.com/736x/8c/11/dd/8c11dd4a7110a437722370c4663f80ec.jpg" user = "Namita Thapa" age={16} desc="I am a good girl. I like props and games too"/>
    </div>
  )
}

export default App ;