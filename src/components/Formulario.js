import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, guardarError] = useState(false);
  // funcion a cada input para leer su contenido

  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const { artista, cancion } = busqueda;
  //Consultar las API
  const buscarInformacion = (e) => {
    e.preventDefault();
    if (artista === "" || cancion === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //// pasar al componente principal
    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
                    
                    {error ? <Error mensaje="Por favor ingresar los criterios de búsqueda" /> : null}
            <fieldset>
              <legend className="text center">
                Buscador letra de canciones Jacky
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      value={artista}
                      onChange={actualizarState}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Canción"
                      value={cancion}
                      onChange={actualizarState}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-none ">
                Buscar
              </button>
            </fieldset>

          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
