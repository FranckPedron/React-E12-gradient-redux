import Button from "../Button";
import ButtonsGroup from "../ButtonsGroup";
import { useDispatch } from 'react-redux';
import { randomHexColor } from '../../../utils';

function RandomButtons() {
  const dispatch = useDispatch();

  const changeFirst = () => {
    dispatch( {
      type: 'CHANGE_FIRST_COLOR',
      color: randomHexColor()
    });
  };

  const changeLast = () => {
    dispatch( {
      type: 'CHANGE_LAST_COLOR',
      color: randomHexColor()
    });
  };

  const changeBoth = () => {
    changeFirst();
    changeLast();
  };

  return (
    <ButtonsGroup>
      <Button action={changeFirst}>Random First</Button>
      <Button action={changeBoth}>Random All</Button>
      <Button action={changeLast}>Random Last</Button>
    </ButtonsGroup>
  )
}

export default RandomButtons;
