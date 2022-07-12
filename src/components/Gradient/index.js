import { useSelector } from 'react-redux';

function Gradient() {
  const direction = useSelector(state => state.direction);
  const firstColor = useSelector(state => state.firstColor);
  const lastColor = useSelector(state => state.lastColor);
  const type = useSelector(state => state.type);

  let result;
  if (type === 'linear') {
    result = `linear-gradient(${direction}, ${firstColor}, ${lastColor})`;
  }
  else {
    result = `radial-gradient(circle at center, ${firstColor}, ${lastColor})`;
  }

  return (
    <div id="gradient"
         style={{
           background: result
         }}>
    </div>
  );
}

export default Gradient;
