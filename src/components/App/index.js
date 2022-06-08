// == Import
import NbColors from "../NbColors";
import Gradient from "../Gradient";
import Colors from "../Colors";
import DirectionButtons from "../Buttons/DirectionButtons";
import RandomButtons from "../Buttons/RandomButtons";

// == Composant
function App() {
  return(
  <div className="app">
    <NbColors />
    <RandomButtons />
    <Colors />
    <Gradient />
    <DirectionButtons />
  </div>
  )
}

// == Export
export default App;
