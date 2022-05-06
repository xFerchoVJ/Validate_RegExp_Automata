import React from "react";
import Form from "./Form";
import "./index.css";

const MainContent = () => {
  return (
    <div className="row d-flex align-items-center top">
      <div className="col-12 col-md-7">
        <h1 className="big_text">
          Ingresa la Expresion{" "}
          <span className="text-primary fw-bold">a Validar</span>
        </h1>
      </div>
      <div className="col-12 col-md-5">
        <Form />
      </div>
    </div>
  );
};

export default MainContent;
