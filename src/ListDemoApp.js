import React, { useState } from "react";

function ListItem(props) {
    const value = props.value;
    return (
      <li>
        {value}
      </li>
    );
}

function NumberTable(props) {
    const value = props.value;

    return (
        <tr><td>{value}</td></tr>
    );

}

function ListDemo(props) {
    const {numbers} = props;
    return (
    <div>
        <h2>All numbers passed in via props</h2>
        <ul>
            {numbers.map((number, index) => <ListItem key={index} value={number}/>)}
        </ul>

        <table>
        <thead>
            <tr>
                <th>Number</th>
            </tr>
        </thead>

        <tbody>
            {numbers.map((number, index) => <NumberTable key={index} value={number}/>)}
        </tbody>

        </table>
    </div>
  );
}

export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
