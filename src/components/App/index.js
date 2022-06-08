// == Import
import Button from "../Button";
import NbColors from "../NbColors";
import Gradient from "../Gradient";
import Colors from "../Colors";

// == Composant
function App() {
  return(
  <div className="app">
    <NbColors />
    <Button>Random First</Button>
    <Button>Random All</Button>
    <Button>Random Last</Button>
    <Colors />
    <Gradient />
    <Button>To Left</Button>
    <Button>To Right</Button>
  </div>
  )
}

// == Export
export default App;
