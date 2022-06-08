import { render} from "react-dom";
import App from "./components/App";

const rootDOMElement = document.getElementById('root');
const rootReactElement = <App />;

render(rootReactElement, rootDOMElement);


/*
// == Imports
import store from 'src/store';
import {changeDirection, changeFirstColor} from './actions';
import { randomHexColor, generateSpanColor } from './utils';

// == Rendu dans le DOM
function renderNbColors() {
  const state = store.getState();
  const { nbColors } = state;

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const state = store.getState();
  const { firstColor, lastColor } = state;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

function render() {
  renderNbColors();
  renderGradient();
  renderColors();
}

// == Initialisation
render();
// + à chaque fois que le state change
store.subscribe(render);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'CHANGE_FIRST_COLOR',
      color: randomHexColor(),
    });
    store.dispatch({
      type: 'CHANGE_LAST_COLOR',
      color: randomHexColor(),
    });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'CHANGE_FIRST_COLOR',
      color: randomHexColor(),
    });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'CHANGE_LAST_COLOR',
      color: randomHexColor(),
    });
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('270deg'));
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('90deg'));
  });

const pinkElement = document.getElementById('pink');
pinkElement.addEventListener('click', () => {
  const action = changeFirstColor('#ff00ff');
  store.dispatch(action);
});

document.getElementById('to45')
.addEventListener('click', () => {
  store.dispatch(changeDirection('45deg'));
});

document.getElementById('to135')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('135deg'));
  });

document.getElementById('to225')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('225deg'));
  });

document.getElementById('to315')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('315deg'));
  });
*/
