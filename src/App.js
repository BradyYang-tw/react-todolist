import "./App.css";
import User from "./components/User";
import UserList from "./components/UserList";
import React, { useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);
  const onAddUser = (dataObj) => {
    setAllData((prevAllData) => {
      return [...prevAllData, dataObj];
    });
  };
  return (
    <div className="App">
      <User onAddUser={onAddUser}></User>
      <UserList allData={allData}></UserList>
    </div>
  );
}

export default App;
