import React from "react";

import Card from "./UI/Card";
import "./UserList.css";

const UserList = (props) => {
  const getData = props.allData.map((d) => {
    return <li key={d.userName}>{`${d.userName}(${d.age} years old)`}</li>;
  });

  return (
    <Card className="Users">
      <ul>{getData}</ul>
    </Card>
  );
};

export default UserList;
