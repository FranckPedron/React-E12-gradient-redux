import { useDispatch, useSelector } from 'react-redux';
import { toggleRadialMode } from '../../actions';

function SwitchType() {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleRadialMode());
  };
  const currentType = useSelector(state => state.type);

  return (
    <div>
      <label>
        <input checked={currentType === 'radial'} onChange={handleChange} type="checkbox"/>
        Activer le dégradé radial
      </label>
    </div>
  );
}

export default SwitchType;
