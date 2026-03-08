import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "Sankar", age: 21 });
  const [marks, setMarks] = useState([10, 20, 30]);

  const btnClicked = () => {
    const newUser = { ...user };
    newUser.name = "White";
    newUser.age = 99;
    setUser(newUser);
    const newMarks = [...marks];
    newMarks.push(40);
    setMarks(newMarks);
    // setUser(prev=>({...prev,age:50}))
  };

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      {marks.map((elem, idx) => {
        return <span key={idx}>{elem} &nbsp;</span>;
      })}{" "}
      <br />
      <button onClick={btnClicked}>Clicked</button>
    </div>
  );
};

export default App;
