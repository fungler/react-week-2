import React from "react";
import PropTypes from 'prop-types';
import {names} from "./file2";


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {

    const {firstName, lastName, email} = props.person;

    return <h1> {firstName} {lastName} - {email} </h1>
}

function App3() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />

        {names.map((name, index)=><WelcomePerson key={index} person = {name}/>)}
      </div>
    );
};

  App3.propTypes = {
    name: PropTypes.string
  }
/* Giver errors men alt virker. Det giver ikke mening. Derfor commented out.
  WelcomePerson.propTypes = {
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
  }
*/
  export default App3;