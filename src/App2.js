import React from 'react';
import person from "./file2";
import {males, females} from "./file2";

const {firstName, email} = person;

const personV2 = {...person, phone: "2123213", friends: ["ass", "react"]};


function App2() {

    console.log(...males, ...females);
    console.log(...males, "Kurt", "Helle", ...females, "Tina");

    console.log(personV2);
    return (
      <div className="App2">
          <p>{firstName}</p>
          <p>{email}</p>
      </div>
    );
  }

export default App2;