import React from 'react'
import logo from "../mision/logo_nuevo_fondo_blanco.jpg"

const Mision = () => {
  return (
    <div className='colaborador mision'>
      <div className="presentacion">
        <div className="presentacion-corta">
          <h2>
            {props.titulo}
          </h2>
          <h3>
            <b>{props.subtitulo}</b>
          </h3>
        </div>

        <div className="imagen-presentacion mision-title">
          <div className="wrapper-image mision-title">
            <img src={props.imagen} alt="" />
          </div>
        </div>

      </div>

      <div className="texto-colaborador">
        <p>
            {props.texto}
        </p>
      </div>
    </div>
  )
}

export default Mision
