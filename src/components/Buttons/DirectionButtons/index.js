import Button from "../Button";
import ButtonsGroup from "../ButtonsGroup";
import { useDispatch } from 'react-redux';
import { CHANGE_DIRECTION } from '../../../actions';
import OtherDirectionChoice from './OtherDirectionChoice';

function DirectionButtons() {
  const dispatch = useDispatch();
  // currying: fonction qui retourne une fonction qui a mémorisé son contexte (paramètre de la première fonction)
  const changeDirection = function (newDirection) {
    return function () {
      dispatch({
        type: CHANGE_DIRECTION,
        direction: newDirection
      });
    };
  };

  return (
    <ButtonsGroup>
      <Button action={changeDirection('270deg')}>To Left</Button>
      <Button action={changeDirection('90deg')}>To Right</Button>
      <Button action={changeDirection('45deg')}>To 45°</Button>
      <Button action={changeDirection('135deg')}>To 135°</Button>
      <Button action={changeDirection('225deg')}>To 225°</Button>
      <Button action={changeDirection('315deg')}>To 315°</Button>
      <OtherDirectionChoice />
    </ButtonsGroup>
  );
}

export default DirectionButtons;
