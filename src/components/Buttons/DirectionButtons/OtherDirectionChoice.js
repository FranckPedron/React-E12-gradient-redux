import './other.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changeDirection } from '../../../actions';


function OtherDirectionChoice() {
  const direction = useSelector(state => state.direction).replace('deg', '');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeDirection(`${e.target.value}deg`));
  }

  return (
    <div className="other">
      <label className="other-label">
        Autre
        <input placeholder="123" type="number" className="other-input" value={direction} onChange={handleChange}/>
        <span className="other-unit">deg</span>
      </label>
    </div>
  );
}

export default OtherDirectionChoice;
