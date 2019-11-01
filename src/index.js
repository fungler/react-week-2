import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './App3';
import App2 from './App2'
import App from './App';
import App4 from './App4';
import App5 from './App5';
import ListDemoApp from "./ListDemoApp";
import FormDemo from "./FormDemo";
import FormDemoMultiple from "./FormDemoMultiple";

let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">ex1 (DAY 1)</a> &nbsp;
         <a href="/"  className="x" id="app2">ex2 (DAY 1)</a> &nbsp;
         <a href="/"  className="x" id="app3">ex3 (DAY 1)</a> &nbsp;
         <a href="/"  className="x" id="app4">ex4 (DAY 2)</a> &nbsp;
         <a href="/"  className="x" id="app5">ex5 (DAY 2)</a> &nbsp;
         <a href="/"  className="x" id="app6">ex6 (DAY 2)</a> &nbsp;
         <a href="/"  className="x" id="app7">ex7 (DAY 3)</a> &nbsp;
         <a href="/"  className="x" id="app8">ex8 (DAY 3)</a> &nbsp;

         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "app4": app = <App4 startVal={4} toIncrement={2} />; break;
        case "app5": app = <App5 />; break;
        case "app6": app = <ListDemoApp />; break;
        case "app7": app = <FormDemo />; break;
        case "app8": app = <FormDemoMultiple />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));