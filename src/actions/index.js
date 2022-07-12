/* eslint-disable import/prefer-default-export */
// action type
// constante pour mémoriser le type d'une action
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
export const TOGGLE_RADIAL_MODE = 'TOGGLE_RADIAL_MODE';

// action creator
// fonction qui retourne un objet action éventuellement paramétrable
export const changeFirstColor = (newColor) => ({
  type: CHANGE_FIRST_COLOR,
  color: newColor,
});

export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction
});

export const toggleRadialMode = () => ({
  type: TOGGLE_RADIAL_MODE
});
