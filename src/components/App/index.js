// == Import
import NbColors from '../NbColors';
import Gradient from '../Gradient';
import Colors from '../Colors';
import DirectionButtons from '../Buttons/DirectionButtons';
import RandomButtons from '../Buttons/RandomButtons';
import SwitchType from '../SwithchType';
import { useSelector } from 'react-redux';

// == Composant
function App() {

  const type = useSelector(state => state.type);

  return (
    <div className="app">
      <NbColors/>
      <RandomButtons/>
      <Colors/>
      <Gradient/>
      {type === 'linear' && <DirectionButtons/>}
      <SwitchType/>
    </div>
  );
}

// == Export
export default App;
