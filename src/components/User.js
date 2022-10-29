import React, { useState } from "react";
import "./User.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const User = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ userName: "", age: "" });
  const handleUserName = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, userName: e.target.value });
  };

  const handleAge = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, age: +e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // let inputData = {Username: }
    console.log("submit", formData);
    // if (
    //   formData.userName.trim().length === 0 ||
    //   formData.age.trim().length === 0
    // ) {
    //   return;
    // }

    // if (+formData.age < 1) {
    //   return;
    // }
    onAddUser(formData);
    setFormData({ userName: "", age: "" });
  };
  return (
    <div>
      <div className="backdrop">
        <ErrorModal title="Error" message="fire!!!"></ErrorModal>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <div className="formList">
            <label>Username</label>
            <br />
            <input
              type="text"
              onChange={handleUserName}
              value={formData.userName}
            />
          </div>
          <div className="formList">
            <label>Age(Years)</label>
            <br />
            <input
              type="number"
              onChange={handleAge}
              value={formData.age}
              min="1"
            />
          </div>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default User;
