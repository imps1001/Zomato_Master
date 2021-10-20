import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  return (
    <div>
    <HomeLayoutHOC path="/" exact component={Temp}/>
    <HomeLayoutHOC path="/:type" exact component={Master}/>
    </div>
  )
}

export default App;