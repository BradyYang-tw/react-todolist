import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2 className="">{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
