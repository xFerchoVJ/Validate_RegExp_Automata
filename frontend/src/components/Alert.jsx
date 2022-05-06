const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "bg-danger fs-3 rounded" : "bg-success fs-3 rounded"
      } text-center p-3 text-white fw-bold`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
