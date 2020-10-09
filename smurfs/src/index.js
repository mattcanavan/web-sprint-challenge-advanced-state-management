import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from 'react-redux'; //glue between redux and react
import store from './store';



ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
