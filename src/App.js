import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./file1";

function App() {
  return (
    <div className="App">
        <p>
          {text1}
          {text2}
          {text3}
          {upper("holaaaah")}
        </p>
    </div>
  );
}

export default App;
