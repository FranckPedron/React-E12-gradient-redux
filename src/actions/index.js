/* eslint-disable import/prefer-default-export */
// action type
// constante pour mémoriser le type d'une action
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';

// action creator
// fonction qui retourne un objet action éventuellement paramétrable
export const changeFirstColor = (newColor) => ({
  type: CHANGE_FIRST_COLOR,
  color: newColor,
});
