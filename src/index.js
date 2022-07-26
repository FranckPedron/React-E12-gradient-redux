import { render} from "react-dom";
import { Provider} from "react-redux";

import App from "./components/App";
import store from "./store";

const rootDOMElement = document.getElementById('root');
const rootReactElement =(
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootReactElement, rootDOMElement);
