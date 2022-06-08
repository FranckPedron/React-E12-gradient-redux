import { useSelector } from 'react-redux';

function NbColors() {
  const nbColors = useSelector((state) => state.nbColors);
  let text = nbColors > 1 ? 'couleurs' : 'couleur';
  
  return (
    <div id="nbColors">
      {nbColors} {text}
    </div>
  );
}

export default NbColors;
