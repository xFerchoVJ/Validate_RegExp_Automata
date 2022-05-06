import { useState } from "react";
import axios from "axios";
import Alerta from "./Alert";

const Form = () => {
  const url = `${import.meta.env.VITE_API_URL}`;
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState({});
  const handleInput = (e) => setInput(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input === "") {
      setAlert({
        msg: "El campo no puede ir vacio",
        error: true,
      });
      return;
    }
    try {
      const { data } = await axios.post(`${url}/validate_expresion`, {
        string: input,
      });
      setAlert({
        msg: data.message,
        error: data.error,
      });
    } catch (error) {
      console.log(error);
      setAlert({
        msg: "Error al consultar la API",
        error: true,
      });
    }
  };
  const { msg } = alert;
  return (
    <form onSubmit={handleSubmit}>
      {msg && <Alerta alerta={alert} />}
      <div className="mt-4 row shadow-lg p-3 rounded">
        <label htmlFor="inputString" className="col-form-label fs-1">
          Cadena
        </label>
        <div>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Ejemplo: abc"
            className="form-control p-3"
            id="inputString"
          />
        </div>
      </div>
      <button className="btn btn-primary btn-lg mt-4 w-100" type="submit">
        ¡Validar!
      </button>
    </form>
  );
};

export default Form;
