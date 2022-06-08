import { render} from "react-dom";
import App from "./src/components/App";

const rootDOMElement = document.getElementById('root');
const rootReactElement = <App />;

render(rootReactElement, rootDOMElement);
