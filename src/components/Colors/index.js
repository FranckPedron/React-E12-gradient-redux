import Color from '../Color'
import { useSelector } from 'react-redux';

function Colors() {
  const firstColor = useSelector(state => state.firstColor);
  const lastColor = useSelector(state => state.lastColor);

  return (
    <div id="colors">
      <Color color={firstColor} /> - <Color color={lastColor} />
    </div>
  );
}

export default Colors;
