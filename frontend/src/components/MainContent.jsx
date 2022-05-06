import React from "react";
import Form from "./Form";
import "./index.css";
import Automata from "../static/img/automata.jpeg";

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
      <div className="col-12 col-md-6 my-5">
        <h2 className="fs-1">
          Automata que se utilizo para obtener la{" "}
          <span className="text-primary fw-bold">Expresión Regular</span>
        </h2>
      </div>
      <div className="col-12 col-md-6 my-5">
        <img src={Automata} className="img_fluida shadow" />
      </div>
    </div>
  );
};

export default MainContent;
