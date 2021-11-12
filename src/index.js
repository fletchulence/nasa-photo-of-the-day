import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

//import css
import "./index.css";
import theme from './theme';

//import components
import App from "./App";

ReactDOM.render(
    <ThemeProvider theme={theme}>  
       <App /> 
    </ThemeProvider>, 
    document.getElementById("root")
);
