import {CHANGE_DIRECTION, CHANGE_FIRST_COLOR} from '../actions';

const initialState = {
  firstColor: '#123456',
  lastColor: '#654321',
  direction: '90deg',
  nbColors: 0,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_DIRECTION_TO_RIGHT':
      return {
        ...state,
        direction: '90deg',
      };
    case 'CHANGE_DIRECTION_TO_LEFT':
      return {
        ...state,
        direction: '270deg',
      };
    case 'CHANGE_LAST_COLOR':
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.color,
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.color,
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };

    default:
      return state;
  }
}

export default reducer;
