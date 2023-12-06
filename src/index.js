import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* 2023-12-06 New Navbar attempt following https://www.freecodecamp.org/news/how-to-use-react-router-version-6/
I ran npm */
import { BrowserRouter } from "react-router-dom";
// import { StaticRouter } from 'react-router-dom/server';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.PUBLIC_URL)
root.render(

    <BrowserRouter baseName={'https://newtfire.github.io/' + process.env.PUBLIC_URL}>


    <App />

    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
