import React, {useState} from "react";
 
const NameForm = () => {

    const [name,setName] = useState("");

  function handleChange(event) {
      const target = event.target;
      
      setName(target.value);
  }
  function handleSubmit() {
      alert(name);
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id="inputName" type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
